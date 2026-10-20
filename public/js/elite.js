/**
 * Shared behaviour for pages using the Obsidian Cipher theme.
 * Inline event attributes (onclick/onsubmit) are blocked by the CSP
 * (script-src-attr 'none'), so everything is wired up here instead.
 */
(function () {
  // CSRF token from <meta name="csrf-token">
  window.getCsrfToken = function () {
    const meta = document.querySelector('meta[name="csrf-token"]');
    return (meta && meta.content) || '';
  };

  // Toast: exToast('Saved') or exToast('Failed', true)
  let toastTimer;
  window.exToast = function (message, isError) {
    let toast = document.getElementById('ex-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'ex-toast';
      toast.className = 'ex-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      toast.innerHTML = '<span class="msi"></span><span class="ex-toast__msg"></span>';
      document.body.appendChild(toast);
    }
    toast.querySelector('.msi').textContent = isError ? 'error' : 'check_circle';
    toast.querySelector('.ex-toast__msg').textContent = message;
    toast.classList.toggle('is-error', !!isError);
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2800);
  };

  window.updateCartCount = function (count) {
    const el = document.getElementById('cart-count');
    if (el && count !== undefined) el.textContent = count;
  };

  // Product photos shot on a white background look out of place in the dark
  // theme: sample the image's border pixels and mark light ones with .is-light
  // so the CSS can dim them and add a vignette.
  function markLightImage(img) {
    try {
      const size = 24;
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = size;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, size, size);
      const data = ctx.getImageData(0, 0, size, size).data;
      // Share of near-white edge pixels; a product can cover part of the edge,
      // so this is more reliable than the average brightness
      let bright = 0;
      let count = 0;
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (x > 1 && x < size - 2 && y > 1 && y < size - 2) continue; // edges only
          const i = (y * size + x) * 4;
          if (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2] > 215) bright++;
          count++;
        }
      }
      if (bright / count >= 0.2) img.parentElement.classList.add('is-light');
    } catch (e) {
      // Cross-origin images can't be read; leave them as they are
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.ex-card__media img, .ex-detail__media img, .ex-line__img img').forEach(function (img) {
      if (img.complete && img.naturalWidth) markLightImage(img);
      else img.addEventListener('load', function () { markLightImage(img); }, { once: true });
    });
  });

  // <form data-confirm="Are you sure?"> asks before submitting
  document.addEventListener('submit', function (e) {
    const message = e.target.dataset && e.target.dataset.confirm;
    if (message && !window.confirm(message)) e.preventDefault();
  });

  // "/" focuses the header search box
  document.addEventListener('keydown', function (e) {
    const search = document.getElementById('catalog-search');
    const active = document.activeElement;
    const typing = active && (['INPUT', 'TEXTAREA', 'SELECT'].includes(active.tagName) || active.isContentEditable);
    if (e.key === '/' && search && !typing) {
      e.preventDefault();
      search.focus();
    }
  });
})();
