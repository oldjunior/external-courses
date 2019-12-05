import { sendToStorage } from '../../../index.js';
export function addCardListContextBtn(actualCards) {
  const
    contextMenuWrappers = document.querySelectorAll('.list__context-menu'),
    contextMenuBtn = `
      <button class="list__heading-btn">
        <svg class="list__heading-img"><use xlink:href="./src/assets/img/icons.svg#list-heading-btn" /></svg>
      </button>
    `;
  let cards = actualCards;
  contextMenuWrappers.forEach(contextMenuWrapper => {
    contextMenuWrapper.insertAdjacentHTML('afterbegin', contextMenuBtn);
  });
  let menuBody, clickScreen, issueStatus, menuContainer, isOpen = false;
  function toggleListContextMenu(event) {
    const contextMenuTmpl = `
      <ul class="list__context-menu-list">
        <li>
          <button class="list__context-menu-btn remove-list-btn">Remove list</button>
        </li>
      </ul>
    `;
    issueStatus = event.target.closest('.list') ? +event.target.closest('.list').id : issueStatus;
    menuContainer = document.getElementById(issueStatus).querySelector('.list__context-menu');
    if (!isOpen){
      menuBody = document.createElement('nav');
      menuBody.setAttribute('class', 'list__context-menu-dropdown');
      menuContainer.appendChild(menuBody);
      document.querySelector('.list__context-menu-dropdown').insertAdjacentHTML('afterbegin', contextMenuTmpl);
      document.querySelector('.remove-list-btn').addEventListener('click', removeList);
      clickScreen = document.createElement('div');
      clickScreen.setAttribute('class', 'list__context-click-screen');
      menuContainer.appendChild(clickScreen);
      document.querySelector('.list__context-click-screen').addEventListener('click', toggleListContextMenu);
      isOpen = true;
    } else {
      menuContainer.removeChild(menuBody);
      document.querySelector('.list__context-click-screen').removeEventListener('click', toggleListContextMenu);
      menuContainer.removeChild(clickScreen);
      isOpen = false;
    }
  }
  document.querySelectorAll('.list__heading-btn').forEach(listHeadingBtn => {
    listHeadingBtn.addEventListener('click', toggleListContextMenu);
  });
  function removeList(event) {
    const issueStatus = +event.target.closest('.list').id
    delete cards.statuses[issueStatus];
    cards.issues = cards.issues.filter(issue => issue.status !== issueStatus + '');
    if (cards.statuses.every(status => status === null)) {
      cards.statuses.length = 0;
      cards.issues.length = 0;
    }
    sendToStorage(cards);
  }
}