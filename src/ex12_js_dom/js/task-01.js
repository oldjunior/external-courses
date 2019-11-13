'use strict';
let photo = [];
let num = 0;
let img;
let prevShown;

function getPhotoJSON(url) {
   return fetch(url).then(response => response.json());
}
getPhotoJSON('https://www.oldjun.fun/slider/get_photos.json').then(data => {
   for (var key in data) {
     if (data.hasOwnProperty(key)) {
        photo[key] = data[key];
      }
    }
  changePhoto(num);
});

document.querySelector('.slider__right-btn').addEventListener('click', nextPhoto);
document.querySelector('.slider__left-btn').addEventListener('click', prevPhoto);

function changePhoto(num) {
  if (prevShown) {
    document.querySelector('.slider__content').removeChild(prevShown);
  }
  img = document.createElement('img');
  img.setAttribute('class', 'slider__photo fadein-animation');
  img.setAttribute('src', photo[num].imgURL);
  img.setAttribute('alt', photo[num].imgDesc);
  img.setAttribute('title', photo[num].imgDesc);
  prevShown = document.querySelector('.slider__content').appendChild(img);
}
function nextPhoto() {
  num++;
  if (num === photo.length) num = 0;
  changePhoto(num);
}
function prevPhoto() {
  num--;
  if (num < 0) num = photo.length - 1;
  changePhoto(num);
}