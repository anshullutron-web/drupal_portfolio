(function (Drupal, once) {
  Drupal.behaviors.getintouchAccordion = {
    attach: function (context) {

      once('faqAccordion', context.querySelectorAll('.faq-question')).forEach(function (question) {

        question.addEventListener('click', function () {

          const item = this.parentElement;
          const icon = this.querySelector('.faq-icon');
          const allItems = document.querySelectorAll('.faq-item');

          /* CLOSE ALL */

          allItems.forEach(function (el) {
            if (el !== item) {
              el.classList.remove('active');
              el.querySelector('.faq-icon').textContent = '+';
            }
          });

          /* TOGGLE CURRENT */

          item.classList.toggle('active');

          if (item.classList.contains('active')) {
            icon.textContent = '-';
          } else {
            icon.textContent = '+';
          }

        });

      });

    }
  };
})(Drupal, once);