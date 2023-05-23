'use strict';

// Elements
const submitEl = document.querySelector('.submit');
const ratingCard = document.querySelector('.rating-card');
const thanksCard = document.querySelector('.thanks-card');
const ratingBtn = document.querySelectorAll('.rating-btn');
const rating = document.querySelector('.rating');

let rate = 0;

const switchColor = function (i) {
  ratingBtn[i].classList.toggle('bg-card-50');
  ratingBtn[i].classList.toggle('bg-orange-50');
  ratingBtn[i].classList.toggle('text-mdgray-50');
  ratingBtn[i].classList.toggle('text-white');
};

// Selecting Rate point
for (let i = 0; i < ratingBtn.length; i++) {
  ratingBtn[i].addEventListener('click', function () {
    for (let j = 0; j < ratingBtn.length; j++) {
      ratingBtn[j].classList.remove('bg-orange-50');
      ratingBtn[j].classList.add('bg-card-50');
      ratingBtn[j].classList.remove('text-white');
      ratingBtn[j].classList.add('text-mdgray-50');
    }
    switchColor(i);
    rate = i + 1;
  });
}

// Submit
submitEl.addEventListener('click', function () {
  rating.textContent = rate;
  ratingCard.classList.toggle('hidden');
  thanksCard.classList.toggle('hidden');
});
