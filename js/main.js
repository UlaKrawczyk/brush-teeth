!function(n){var e={};function r(c){if(e[c])return e[c].exports;var l=e[c]={i:c,l:!1,exports:{}};return n[c].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=n,r.c=e,r.d=function(n,e,c){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)r.d(c,l,function(e){return n[e]}.bind(null,l));return c},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\nconst checkButton = document.querySelector('.play__button--js');\r\nconst checkNumber = document.querySelector('.play__number--js');\r\nconst images = document.querySelectorAll('.rewards__wrapper img');\r\nlet number = 0;\r\n\r\nlet randomNumbers = [];\r\nfor (let i = 0; i < images.length; i++) {\r\n  randomNumbers.push(i);\r\n}\r\n\r\nif (!localStorage.getItem(checkNumber)) {\r\n  localStorage.setItem(checkNumber, number);\r\n  checkNumber.innerHTML = number;\r\n\r\n} else {\r\n  checkNumber.innerHTML = localStorage.getItem(checkNumber);\r\n  number = localStorage.getItem(checkNumber);\r\n}\r\n\r\ncheckButton.addEventListener('click', () => {\r\n  number++;\r\n  checkNumber.innerHTML = number;\r\n  localStorage.setItem(checkNumber, number);\r\n\r\n  if (number == 1 || number == 3 || number == 5 || number == 10 || number == 12 || number == 15 || number == 17 || number == 20 || number == 22 || number == 25 || number == 27 || number == 30) {\r\n    let randomNum = Math.floor(Math.random() * randomNumbers.length);\r\n    let imgNum = randomNumbers[randomNum];\r\n    images[imgNum].classList.add('visible');\r\n    randomNumbers.splice(randomNum, 1);\r\n  }\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xyXG5jb25zdCBjaGVja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5X19idXR0b24tLWpzJyk7XHJcbmNvbnN0IGNoZWNrTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlfX251bWJlci0tanMnKTtcclxuY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJld2FyZHNfX3dyYXBwZXIgaW1nJyk7XHJcbmxldCBudW1iZXIgPSAwO1xyXG5cclxubGV0IHJhbmRvbU51bWJlcnMgPSBbXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICByYW5kb21OdW1iZXJzLnB1c2goaSk7XHJcbn1cclxuXHJcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oY2hlY2tOdW1iZXIpKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY2hlY2tOdW1iZXIsIG51bWJlcik7XHJcbiAgY2hlY2tOdW1iZXIuaW5uZXJIVE1MID0gbnVtYmVyO1xyXG5cclxufSBlbHNlIHtcclxuICBjaGVja051bWJlci5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjaGVja051bWJlcik7XHJcbiAgbnVtYmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oY2hlY2tOdW1iZXIpO1xyXG59XHJcblxyXG5jaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBudW1iZXIrKztcclxuICBjaGVja051bWJlci5pbm5lckhUTUwgPSBudW1iZXI7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY2hlY2tOdW1iZXIsIG51bWJlcik7XHJcblxyXG4gIGlmIChudW1iZXIgPT0gMSB8fCBudW1iZXIgPT0gMyB8fCBudW1iZXIgPT0gNSB8fCBudW1iZXIgPT0gMTAgfHwgbnVtYmVyID09IDEyIHx8IG51bWJlciA9PSAxNSB8fCBudW1iZXIgPT0gMTcgfHwgbnVtYmVyID09IDIwIHx8IG51bWJlciA9PSAyMiB8fCBudW1iZXIgPT0gMjUgfHwgbnVtYmVyID09IDI3IHx8IG51bWJlciA9PSAzMCkge1xyXG4gICAgbGV0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbU51bWJlcnMubGVuZ3RoKTtcclxuICAgIGxldCBpbWdOdW0gPSByYW5kb21OdW1iZXJzW3JhbmRvbU51bV07XHJcbiAgICBpbWFnZXNbaW1nTnVtXS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICByYW5kb21OdW1iZXJzLnNwbGljZShyYW5kb21OdW0sIDEpO1xyXG4gIH1cclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);