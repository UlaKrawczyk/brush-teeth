!function(n){var r={};function e(c){if(r[c])return r[c].exports;var b=r[c]={i:c,l:!1,exports:{}};return n[c].call(b.exports,b,b.exports,e),b.l=!0,b.exports}e.m=n,e.c=r,e.d=function(n,r,c){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:c})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(e.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var b in n)e.d(c,b,function(r){return n[r]}.bind(null,b));return c},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\nconst checkButton = document.querySelector('.play__button--js');\r\nconst brushNumber = document.querySelector('.play__number--js');\r\nconst images = document.querySelectorAll('.rewards__wrapper img');\r\nlet number = 0;\r\nlet imagesNumbers = [];\r\nlet randomNumbers = [];\r\nfor (let i = 0; i < images.length; i++) {\r\n  randomNumbers.push(i);\r\n}\r\n\r\nif (!localStorage.getItem('brushNumber')) {\r\n  localStorage.setItem('brushNumber', number);\r\n  brushNumber.innerHTML = number;\r\n\r\n} else {\r\n  brushNumber.innerHTML = localStorage.getItem('brushNumber');\r\n  number = localStorage.getItem('brushNumber');\r\n  imagesNumbers = JSON.parse(localStorage.getItem(\"imagesNumbers\") || \"[]\");\r\n  for (let num of imagesNumbers) {\r\n    images[num].classList.add('visible');\r\n  }\r\n  for (let num of imagesNumbers) {\r\n    randomNumbers.splice(num, 1);\r\n  }\r\n  console.log(randomNumbers);\r\n}\r\n\r\ncheckButton.addEventListener('click', () => {\r\n  number++;\r\n  brushNumber.innerHTML = number;\r\n  localStorage.setItem('brushNumber', number);\r\n\r\n  if (number == 1 || number == 3 || number == 5 || number == 10 || number == 12 || number == 15 || number == 17 || number == 20 || number == 22 || number == 25 || number == 27 || number == 30) {\r\n    let randomNum = Math.floor(Math.random() * randomNumbers.length);\r\n    console.log(randomNum);\r\n    let imgNum = randomNumbers[randomNum];\r\n    console.log(imgNum);\r\n\r\n    images[imgNum].classList.add('visible');\r\n    randomNumbers.splice(randomNum, 1);\r\n\r\n    imagesNumbers.push(imgNum);\r\n    localStorage.setItem('imagesNumbers', JSON.stringify(imagesNumbers));\r\n  }\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgY2hlY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheV9fYnV0dG9uLS1qcycpO1xyXG5jb25zdCBicnVzaE51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5X19udW1iZXItLWpzJyk7XHJcbmNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXdhcmRzX193cmFwcGVyIGltZycpO1xyXG5sZXQgbnVtYmVyID0gMDtcclxubGV0IGltYWdlc051bWJlcnMgPSBbXTtcclxubGV0IHJhbmRvbU51bWJlcnMgPSBbXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICByYW5kb21OdW1iZXJzLnB1c2goaSk7XHJcbn1cclxuXHJcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JydXNoTnVtYmVyJykpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYnJ1c2hOdW1iZXInLCBudW1iZXIpO1xyXG4gIGJydXNoTnVtYmVyLmlubmVySFRNTCA9IG51bWJlcjtcclxuXHJcbn0gZWxzZSB7XHJcbiAgYnJ1c2hOdW1iZXIuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JydXNoTnVtYmVyJyk7XHJcbiAgbnVtYmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JydXNoTnVtYmVyJyk7XHJcbiAgaW1hZ2VzTnVtYmVycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbWFnZXNOdW1iZXJzXCIpIHx8IFwiW11cIik7XHJcbiAgZm9yIChsZXQgbnVtIG9mIGltYWdlc051bWJlcnMpIHtcclxuICAgIGltYWdlc1tudW1dLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICB9XHJcbiAgZm9yIChsZXQgbnVtIG9mIGltYWdlc051bWJlcnMpIHtcclxuICAgIHJhbmRvbU51bWJlcnMuc3BsaWNlKG51bSwgMSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHJhbmRvbU51bWJlcnMpO1xyXG59XHJcblxyXG5jaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBudW1iZXIrKztcclxuICBicnVzaE51bWJlci5pbm5lckhUTUwgPSBudW1iZXI7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JydXNoTnVtYmVyJywgbnVtYmVyKTtcclxuXHJcbiAgaWYgKG51bWJlciA9PSAxIHx8IG51bWJlciA9PSAzIHx8IG51bWJlciA9PSA1IHx8IG51bWJlciA9PSAxMCB8fCBudW1iZXIgPT0gMTIgfHwgbnVtYmVyID09IDE1IHx8IG51bWJlciA9PSAxNyB8fCBudW1iZXIgPT0gMjAgfHwgbnVtYmVyID09IDIyIHx8IG51bWJlciA9PSAyNSB8fCBudW1iZXIgPT0gMjcgfHwgbnVtYmVyID09IDMwKSB7XHJcbiAgICBsZXQgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZG9tTnVtYmVycy5sZW5ndGgpO1xyXG4gICAgY29uc29sZS5sb2cocmFuZG9tTnVtKTtcclxuICAgIGxldCBpbWdOdW0gPSByYW5kb21OdW1iZXJzW3JhbmRvbU51bV07XHJcbiAgICBjb25zb2xlLmxvZyhpbWdOdW0pO1xyXG5cclxuICAgIGltYWdlc1tpbWdOdW1dLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIHJhbmRvbU51bWJlcnMuc3BsaWNlKHJhbmRvbU51bSwgMSk7XHJcblxyXG4gICAgaW1hZ2VzTnVtYmVycy5wdXNoKGltZ051bSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hZ2VzTnVtYmVycycsIEpTT04uc3RyaW5naWZ5KGltYWdlc051bWJlcnMpKTtcclxuICB9XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);