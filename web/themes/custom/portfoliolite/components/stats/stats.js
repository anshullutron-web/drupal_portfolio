(function (Drupal, once) {

  Drupal.behaviors.statsCounter = {
    attach: function (context) {

      once('statsCounter', context.querySelectorAll('.stat-number')).forEach(function (counter) {

        const target = parseInt(counter.dataset.count);
        if (!target) return;

        let current = 0;

        const observer = new IntersectionObserver(function(entries){

          entries.forEach(function(entry){

            if(entry.isIntersecting){

              const interval = setInterval(function(){

                current += Math.ceil(target / 100);

                if(current >= target){
                  current = target;
                  clearInterval(interval);
                }

                counter.textContent = current;

              },20);

              observer.unobserve(counter);

            }

          });

        },{threshold:0.5});

        observer.observe(counter);

      });

    }
  };

})(Drupal, once);