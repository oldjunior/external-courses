'use strict';
let menuBody, menuLink, clickScreen, isOpen = false;
document.querySelector('.user-menu__btn').addEventListener('click', toggleMenu);
function toggleMenu() {
  const menuItems = [{url: '#', txt: 'Settings'}, {url: '#', txt: 'Sign out'}];
  if (!isOpen){
    document.querySelector('.user-menu__arrow').style.transform = 'rotateZ(180deg)';
    menuBody = document.createElement('nav');
    menuBody.setAttribute('class', 'user-menu__dropdown');
    document.querySelector('.user-menu').appendChild(menuBody);
    menuItems.forEach(item => {
      menuLink = document.createElement('a');
      menuLink.setAttribute('class', 'user-menu__dropdown-item');
      menuLink.setAttribute('href', item.url);
      menuLink.innerText = item.txt;
      document.querySelector('.user-menu__dropdown').appendChild(menuLink);
    });
    clickScreen = document.createElement('div');
    clickScreen.setAttribute('class', 'user-menu__click-screen');
    document.querySelector('.user-menu').appendChild(clickScreen);
    document.querySelector('.user-menu__click-screen').addEventListener('click', toggleMenu);
    isOpen = true;
  } else {
    document.querySelector('.user-menu').removeChild(menuBody);
    document.querySelector('.user-menu__click-screen').removeEventListener('click', toggleMenu);
    document.querySelector('.user-menu').removeChild(clickScreen);
    document.querySelector('.user-menu__arrow').style.transform = 'rotateZ(0deg)';
    isOpen = false;
  }
}