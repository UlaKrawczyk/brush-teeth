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
const clearButton = document.querySelector('.footer__button--js');
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

  if (number == 1 || number == 3 || number == 6 || number == 8 || number == 11 || number == 13 || number == 16 || number == 18 || number == 21 || number == 23 || number == 26 || number == 28 || number == 31 || number == 33 || number == 36 || number == 38 || number == 41 || number == 43 || number == 46 || number == 48 || number == 51 || number == 53 || number == 56 || number == 58 || number == 61 || number == 63 || number == 66 || number == 68 || number == 71) {

    images[imageNumber].classList.add('visible');
    imagesNumbers.push(imageNumber);
    localStorage.setItem('imagesNumbers', JSON.stringify(imagesNumbers));
    imageNumber++;
    localStorage.setItem('imageNumber', imageNumber);
  }
});

clearButton.addEventListener('click', () => {

  for (let element of imagesNumbers) {
    images[element].classList.remove('visible');
  }
  localStorage.clear();

  number = 0;
  localStorage.setItem('brushNumber', number);
  brushNumber.innerHTML = number;

  imageNumber = 0;
  imagesNumbers = [];
})