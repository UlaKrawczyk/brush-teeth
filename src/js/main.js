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

// place your code below
const checkButton = document.querySelector('.play__button--js');
const checkNumber = document.querySelector('.play__number--js');
const images = document.querySelectorAll('.rewards__wrapper img');
let number = 0;

let randomNumbers = [];
for (let i = 0; i < images.length; i++) {
  randomNumbers.push(i);
}

if (!localStorage.getItem(checkNumber)) {
  localStorage.setItem(checkNumber, number);
  checkNumber.innerHTML = number;

} else {
  checkNumber.innerHTML = localStorage.getItem(checkNumber);
  number = localStorage.getItem(checkNumber);
}

checkButton.addEventListener('click', () => {
  number++;
  checkNumber.innerHTML = number;
  localStorage.setItem(checkNumber, number);

  if (number == 1 || number == 3 || number == 5 || number == 10 || number == 12 || number == 15 || number == 17 || number == 20 || number == 22 || number == 25 || number == 27 || number == 30) {
    let randomNum = Math.floor(Math.random() * randomNumbers.length);
    let imgNum = randomNumbers[randomNum];
    images[imgNum].classList.add('visible');
    randomNumbers.splice(randomNum, 1);
  }
});