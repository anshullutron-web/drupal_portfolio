console.log("Skills JS loaded");

(function (Drupal, once) {

  Drupal.behaviors.skillsProgress = {
    attach: function (context) {

      once('skillsProgress', context.querySelectorAll('.progress-bar')).forEach(function (bar) {

        const percent = parseInt(bar.getAttribute('data-percent'));
        const value = bar.querySelector('.progress-value');

        let count = 0;

        const interval = setInterval(function () {

          count++;

          bar.style.width = count + "%";

          if (value) {
            value.textContent = count + "%";
          }

          if (count >= percent) {
            clearInterval(interval);
          }

        }, 20);

      });

    }
  };

})(Drupal, once);