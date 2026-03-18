(function (Drupal, once) {

  Drupal.behaviors.servicesSlider = {
    attach: function (context) {

      once('services-slider', '.services-section', context).forEach(function (section) {

        const cards = section.querySelectorAll('.paragraph--type--services');

        const wrapper = document.createElement('div');
        wrapper.classList.add('services-slider');

        const track = document.createElement('div');
        track.classList.add('services-track');

        cards.forEach(card => {
          track.appendChild(card);
        });

        wrapper.appendChild(track);

        section.querySelector('#block-portfoliolite-ourservicesparagraph')
          .appendChild(wrapper);

        let index = 0;
        const cardWidth = cards[0].offsetWidth + 40;

        function moveSlider() {

          index++;

          if (index >= cards.length) {
            index = 0;
          }

          track.style.transform =
            `translateX(-${index * cardWidth}px)`;

        }

        setInterval(moveSlider, 4000);

      });

    }
  };

})(Drupal, once);