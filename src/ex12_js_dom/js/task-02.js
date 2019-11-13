'use strict';
const menuItems = [{linkURL: '#', linkTxt: 'Settings'}, {linkURL: '#', linkTxt: 'Sign out'}];
let menuBody;
let menuLink;
let clickScreen;
let isShown = false;

document.querySelector('.user-menu__btn').addEventListener('click', toggleMenu);
function toggleMenu() {
  if (!isShown){
  document.querySelector('.user-menu__arrow').style.transform = 'rotateZ(180deg)';
  menuBody = document.createElement('nav');
  menuBody.setAttribute('class', 'user-menu__dropdown');
  document.querySelector('.user-menu').appendChild(menuBody);
  menuItems.forEach(item => {
    menuLink = document.createElement('a');
    menuLink.setAttribute('class', 'user-menu__dropdown-item');
    menuLink.setAttribute('href', item.linkURL);
    menuLink.innerText = item.linkTxt;
    document.querySelector('.user-menu__dropdown').appendChild(menuLink);
  });
  clickScreen = document.createElement('div');
  clickScreen.setAttribute('class', 'user-menu__click-screen');
  document.querySelector('.user-menu').appendChild(clickScreen);
  document.querySelector('.user-menu__click-screen').addEventListener('click', toggleMenu);
  isShown = true;
  } else {
    document.querySelector('.user-menu').removeChild(menuBody);
    document.querySelector('.user-menu__click-screen').removeEventListener('click', toggleMenu);
    document.querySelector('.user-menu').removeChild(clickScreen);
    document.querySelector('.user-menu__arrow').style.transform = 'rotateZ(0deg)';
    isShown = false;
  }
}