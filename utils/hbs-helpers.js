const hbs = require('hbs');

hbs.registerHelper('eq', (a, b) => a == b);
hbs.registerHelper('gt', (a, b) => a > b);
hbs.registerHelper('lt', (a, b) => a < b);
hbs.registerHelper('add', (a, b) => a + b);
hbs.registerHelper('subtract', (a, b) => a - b);
hbs.registerHelper("multiply", (a, b) => a * b)
hbs.registerHelper('json', (context) => JSON.stringify(context));
hbs.registerHelper('includes', (array, value) => {
  if (!Array.isArray(array)) return false;
  return array.includes(value);
});
hbs.registerHelper("formatDate", (date) => {
  if(!date) return '';
  return new Date(date).toLocaleDateString('en-GB', {'day': "numeric", "month" :'long', 'year': 'numeric'}).replace(' ', '-')
})
hbs.registerHelper("formatPrice", (price) => {
  return parseFloat(price).toFixed(2);
})
hbs.registerHelper('urlEncode', (value) => encodeURIComponent(value ?? ''));
// Join values into one string; the trailing Handlebars options argument is dropped
hbs.registerHelper('concat', (...args) => args.slice(0, -1).join(''));
// Product id as a short hex SKU, e.g. 42 -> 0x002A
hbs.registerHelper('skuHex', (id) => '0x' + Number(id).toString(16).toUpperCase().padStart(4, '0'));
const CATEGORY_ICONS = {
  'Electronics': 'memory',
  'Books': 'menu_book',
  'Accessories': 'cable',
  'Clothing': 'apparel',
  'Home & Office': 'desktop_windows'
};
hbs.registerHelper('categoryIcon', (category) => CATEGORY_ICONS[category] || 'category');
