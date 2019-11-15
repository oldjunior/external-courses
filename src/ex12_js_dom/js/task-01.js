'use strict';
const photos = [];
let img, prevShown, count = 0;

function getPhotosJSON(url) {
  return fetch(url).then(response => response.json());
}
getPhotosJSON('https://www.oldjun.fun/slider/get_photos.json').then(data => {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      photos[key] = data[key];
    }
  }
  changePhoto(count);
});

document.querySelector('.slider__right-btn').addEventListener('click', goForward);
document.querySelector('.slider__left-btn').addEventListener('click', goBack);

function changePhoto(count) {
  if (prevShown) {
    document.querySelector('.slider__content').removeChild(prevShown);
  }
  img = document.createElement('img');
  img.setAttribute('class', 'slider__photo fadein-animation');
  img.setAttribute('src', photos[count].imgURL);
  img.setAttribute('alt', photos[count].imgDesc);
  img.setAttribute('title', photos[count].imgDesc);
  prevShown = document.querySelector('.slider__content').appendChild(img);
}
function goForward() {
  count++;
  if (count === photos.length) count = 0;
  changePhoto(count);
}
function goBack() {
  count--;
  if (count < 0) count = photos.length - 1;
  changePhoto(count);
}