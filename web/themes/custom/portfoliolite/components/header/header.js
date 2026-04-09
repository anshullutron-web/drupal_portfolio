(function (Drupal, once) {
  Drupal.behaviors.headerBehavior = {
    attach: function (context) {

      const header = document.querySelector('.main-header');
      if (!header) return;

      // 🔥 Attach scroll ONLY ONCE globally
      if (!window.headerStickyAttached) {

        window.addEventListener('scroll', function () {
          if (window.scrollY > 50) {
            header.classList.add('sticky');
          } else {
            header.classList.remove('sticky');
          }
        });

        window.headerStickyAttached = true;
      }

    }
  };
})(Drupal, once);

document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.main-menu').classList.toggle('active');
});