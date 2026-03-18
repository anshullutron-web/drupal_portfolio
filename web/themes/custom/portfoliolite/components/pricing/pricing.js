(function (Drupal) {
  Drupal.behaviors.pricing = {
    attach: function (context) {

      const cards = document.querySelectorAll(".pricing-card");

      cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
          card.style.boxShadow = "0 15px 40px rgba(0,0,0,.2)";
        });

        card.addEventListener("mouseleave", () => {
          card.style.boxShadow = "";
        });
      });

    }
  };
})(Drupal);