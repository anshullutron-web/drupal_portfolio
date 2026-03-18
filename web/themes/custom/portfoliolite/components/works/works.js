(function (Drupal, once) {

Drupal.behaviors.worksFilter = {
attach: function (context) {

once('works-filter', context.querySelectorAll('.works')).forEach(function(section){

const buttons = section.querySelectorAll('.filter-btn');
const items = section.querySelectorAll('.works-item');

/* FILTER */

buttons.forEach(button => {

button.addEventListener('click', function(){

buttons.forEach(btn => btn.classList.remove('active'));
this.classList.add('active');

const filter = this.dataset.filter;

items.forEach(item => {

if(filter === "all"){
item.style.display = "block";
}
else{
const category = item.dataset.category;
item.style.display = category === filter ? "block" : "none";
}

});

});

});


/* LIGHTBOX */

const images = section.querySelectorAll('.works-image');
const lightbox = document.querySelector('.works-lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const next = document.querySelector('.lightbox-next');
const prev = document.querySelector('.lightbox-prev');
const close = document.querySelector('.lightbox-close');

let currentIndex = 0;
const imageArray = Array.from(images);

function showImage(index){
currentIndex = index;
lightboxImg.src = imageArray[index].dataset.image;
lightbox.style.display = "flex";
}

images.forEach((img, index)=>{
img.addEventListener('click', ()=> showImage(index));
});

next.addEventListener('click', ()=>{
currentIndex = (currentIndex + 1) % imageArray.length;
showImage(currentIndex);
});

prev.addEventListener('click', ()=>{
currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
showImage(currentIndex);
});

close.addEventListener('click', ()=>{
lightbox.style.display = "none";
});

});

}
};

})(Drupal, once);