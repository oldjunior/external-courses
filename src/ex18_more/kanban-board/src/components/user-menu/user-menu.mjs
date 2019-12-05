export function addUserMenu() {
  const
    userMenuWrapper = document.querySelector('.user-menu'),
    userMenuBtn = `
      <button class="user-menu__btn">
        <img class="user-menu__avatar" src="./src/assets/img/avatar-mock.png" alt="profile picture">
        <svg class="user-menu__arrow"><use xlink:href="./src/assets/img/icons.svg#user-menu-arrow" /></svg>
      </button>
    `;
  userMenuWrapper.insertAdjacentHTML('afterbegin', userMenuBtn);

  let menuBody, menuLink, clickScreen, isOpen = false;
  function toggleUserMenu() {
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
      document.querySelector('.user-menu__click-screen').addEventListener('click', toggleUserMenu);
      isOpen = true;
    } else {
      document.querySelector('.user-menu').removeChild(menuBody);
      document.querySelector('.user-menu__click-screen').removeEventListener('click', toggleUserMenu);
      document.querySelector('.user-menu').removeChild(clickScreen);
      document.querySelector('.user-menu__arrow').style.transform = 'rotateZ(0deg)';
      isOpen = false;
    }
  }
    document.querySelector('.user-menu__btn').addEventListener('click', toggleUserMenu);
  }
