const { DataTypes, Model } = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 100]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [10, 1000]
        }
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          isFloat: true,
          min: 0
        }
      },
      stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isInt: true,
          min: 0
        }
      },
      category: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 50]
        }
      },
      image_url: {
        type: DataTypes.STRING(500),
        allowNull: true
      }
    }, {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    });

    return this;
  }

  static associate(models) {
    // Define associations here
    this.hasMany(models.Cart, {
      foreignKey: 'product_id',
      as: 'cartItems'
    });
    this.hasMany(models.OrderItem, {
      foreignKey: 'product_id',
      as: 'orderItems'
    });
  }

  // Instance methods
  isInStock() {
    return this.stock_quantity > 0;
  }

  // Static methods
  static async findAllWithFilters(limit = 20, offset = 0, category = null, { sort = 'newest', maxPrice = null, search = '' } = {}) {
    const { Op } = require('sequelize');
    const whereClause = { stock_quantity: { [Op.gt]: 0 } };
    if (category) whereClause.category = category;
    if (maxPrice) whereClause.price = { [Op.lte]: maxPrice };
    if (search) {
      // Escape LIKE wildcards so user input is matched literally
      whereClause.name = { [Op.iLike]: `%${search.replace(/[\\%_]/g, '\\$&')}%` };
    }

    const orders = {
      newest: [['created_at', 'DESC']],
      price_asc: [['price', 'ASC']],
      price_desc: [['price', 'DESC']],
      stock: [['stock_quantity', 'DESC']]
    };

    return this.findAll({
      where: whereClause,
      limit,
      offset,
      order: [...(orders[sort] || orders.newest), ['id', 'ASC']]
    });
  }

  // In-stock product counts per category, plus the highest in-stock price
  static async getCatalogStats() {
    const { Op } = require('sequelize');
    const { fn, col } = this.sequelize;
    const rows = await this.findAll({
      attributes: [
        'category',
        [fn('COUNT', col('id')), 'count'],
        [fn('MAX', col('price')), 'maxPrice']
      ],
      where: { stock_quantity: { [Op.gt]: 0 } },
      group: ['category'],
      order: [['category', 'ASC']],
      raw: true
    });

    const categories = rows.map(row => ({ name: row.category, count: Number(row.count) }));
    return {
      categories,
      total: categories.reduce((sum, cat) => sum + cat.count, 0),
      maxPrice: Math.ceil(Math.max(0, ...rows.map(row => Number(row.maxPrice))))
    };
  }

  static async getCategories() {
    const categories = await this.findAll({
      attributes: [[this.sequelize.fn('DISTINCT', this.sequelize.col('category')), 'category']],
      order: [['category', 'ASC']]
    });
    return categories.map(cat => cat.category);
  }

  static async updateStock(id, quantity) {
    const product = await this.findByPk(id);
    if (!product || product.stock_quantity < quantity) {
      throw new Error('Insufficient stock');
    }

    product.stock_quantity -= quantity;
    await product.save();
    return product;
  }
}

module.exports = Product;
