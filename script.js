(function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Gentle reveal on scroll (content stays visible if JS or IntersectionObserver is unavailable)
  if ('IntersectionObserver' in window) {
    var items = document.querySelectorAll('.card, .step, .product, .coming, .accordion details');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    items.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }
})();
