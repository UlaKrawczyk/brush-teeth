"use strict";

// service worker registration - remove if you're not going to use it
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const checkButton = document.querySelector('.play__button--js');
const brushNumber = document.querySelector('.play__number--js');
const images = document.querySelectorAll('.rewards__wrapper img');
let number = 0;
let imageNumber = 0;
let imagesNumbers = [];


if (!localStorage.getItem('brushNumber')) {
  localStorage.setItem('brushNumber', number);
  brushNumber.innerHTML = number;

} else {
  brushNumber.innerHTML = localStorage.getItem('brushNumber');
  number = localStorage.getItem('brushNumber');
  imagesNumbers = JSON.parse(localStorage.getItem("imagesNumbers") || "[]");
  for (let num of imagesNumbers) {
    images[num].classList.add('visible');
  }
  imageNumber = parseInt(localStorage.getItem('imageNumber'));
}

checkButton.addEventListener('click', () => {
  number++;
  brushNumber.innerHTML = number;
  localStorage.setItem('brushNumber', number);

  if (number == 1 || number == 3 || number == 5 || number == 10 || number == 12 || number == 15 || number == 17 || number == 20 || number == 22 || number == 25 || number == 27 || number == 30) {

    images[imageNumber].classList.add('visible');
    imagesNumbers.push(imageNumber);
    localStorage.setItem('imagesNumbers', JSON.stringify(imagesNumbers));
    imageNumber++;
    localStorage.setItem('imageNumber', imageNumber);
  }
});