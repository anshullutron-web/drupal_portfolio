(function (Drupal) {

  Drupal.behaviors.skillsProgress = {
    attach: function (context) {

      const bars = context.querySelectorAll('.progress-bar');

      function animateBar(bar) {
        const percent = parseInt(bar.dataset.percent) || 0;
        const value = bar.querySelector('.progress-value');

        let count = 0;

        function animate() {
          if (count >= percent) return;

          count++;
          bar.style.width = count + "%";

          if (value) {
            value.textContent = count + "%";
          }

          requestAnimationFrame(animate);
        }

        // reset before animating again
        bar.style.width = "0%";
        if (value) value.textContent = "0%";

        animate();
      }

      function isInView(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      }

      function handleScroll() {
        bars.forEach(function (bar) {
          if (isInView(bar)) {
            animateBar(bar);
          }
        });
      }

      // Run on scroll
      window.addEventListener('scroll', handleScroll);

      // Run once on load
      handleScroll();
    }
  };

})(Drupal);