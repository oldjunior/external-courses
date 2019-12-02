import { addLogo } from '../../components/logo/logo.mjs';
import { addCreateListBtn } from '../../components/buttons/create-list-btn/create-list-btn.mjs';
import { addUserMenu } from '../../components/user-menu/user-menu.mjs';

export function addHeader() {
  const header = document.querySelector('.header');
  const headerContent = `
    <div class="app-logo">
    ${addLogo()}
    </div>
    <div class="header__filler"></div>
    <div class="create-list-btn__wrapper">
    </div>
    <div class="user-menu">
    </div>
  `;
  header.insertAdjacentHTML('afterbegin', headerContent);
  addCreateListBtn();
  addUserMenu();
}