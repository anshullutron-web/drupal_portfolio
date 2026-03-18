(function (Drupal, once) {

Drupal.behaviors.reviewSlider = {
attach: function (context) {

once('review-slider', context.querySelectorAll('.review')).forEach(function(section){

const slider = section.querySelector('.review-slider');
const slides = section.querySelectorAll('.review-slide');
const dots = section.querySelectorAll('.dot');

let index = 0;

function showSlide(i){

slider.style.transform = "translateX(-" + (i * 100) + "%)";

dots.forEach(d => d.classList.remove('active'));
dots[i].classList.add('active');

}

function nextSlide(){

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

}

setInterval(nextSlide, 4000);

});
}
};

})(Drupal, once);