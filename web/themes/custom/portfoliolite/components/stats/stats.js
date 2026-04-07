(function (Drupal) {

  Drupal.behaviors.statsCounter = {
    attach: function (context) {

      const counters = context.querySelectorAll('.stat-number');

      counters.forEach(function (counter) {

        const target = parseInt(counter.dataset.count);
        if (!target) return;

        let observer = new IntersectionObserver(function(entries){

          entries.forEach(function(entry){

            if(entry.isIntersecting){

              let current = 0;

              const interval = setInterval(function(){

                current += Math.ceil(target / 100);

                if(current >= target){
                  current = target;
                  clearInterval(interval);
                }

                counter.textContent = current;

              },20);

            } else {
              // 🔥 RESET when out of view
              counter.textContent = 0;
            }

          });

        }, { threshold: 0.5 });

        observer.observe(counter);

      });

    }
  };

})(Drupal);