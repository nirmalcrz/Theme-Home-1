/* Lumina Theme JS */
(function () {
  'use strict';

  // Newsletter form submit
  document.querySelectorAll('.footer-newsletter-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        input.value = '';
        var btn = form.querySelector('button');
        if (btn) {
          var orig = btn.textContent;
          btn.textContent = 'Subscribed!';
          setTimeout(function () { btn.textContent = orig; }, 2500);
        }
      }
    });
  });

  // Mobile menu toggle (basic)
  var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  var mobileNav = document.querySelector('.mobile-nav');
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function () {
      var isOpen = mobileNav.getAttribute('aria-hidden') === 'false';
      mobileNav.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
      mobileNav.style.display = isOpen ? 'none' : 'block';
    });
  }
})();
