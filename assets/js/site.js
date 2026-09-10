// Shared behaviour for every page: year, section reveal, nav hairline, mobile menu.
(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.fade-in, .scale-in').forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('.fade-in, .scale-in').forEach(function (el) { el.classList.add('visible'); });
  }

  // Freeze the orbiting dots for people who asked for less motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('svg.hero-orbits').forEach(function (svg) {
      if (svg.pauseAnimations) svg.pauseAnimations();
    });
  }

  // Theme toggle: explicit choice wins over the system setting and is remembered
  var root = document.documentElement;
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  var currentTheme = function () {
    return root.getAttribute('data-theme') || (systemDark.matches ? 'dark' : 'light');
  };
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { }
    });
  });

  var nav = document.querySelector('nav');
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      nav.classList.toggle('scrolled', window.pageYOffset > 8);
      ticking = false;
    });
  }, { passive: true });

  var menuToggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    var setOpen = function (open) {
      menuToggle.classList.toggle('active', open);
      navLinks.classList.toggle('active', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    menuToggle.addEventListener('click', function () {
      setOpen(!navLinks.classList.contains('active'));
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
  }
})();
