const slides = document.querySelectorAll('.slides');
let slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let i = 0;

function activeSlide(n){
  for(slider of slides)
  slider.classList.remove('active');
  slides[n].classList.add('active');
}

function previous() {
  prev.addEventListener('click');
  if (i == slides.length - 1) {
    i = 0;
    activeSlide(i);
  }
  else {
    i++;
    activeSlide(i);
  }
};