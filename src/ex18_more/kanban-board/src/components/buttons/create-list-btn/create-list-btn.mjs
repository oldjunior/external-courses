import { sendToStorage } from '../../../index.js';
export function addCreateListBtn(actualCards) {
  const
    header = document.querySelector('.header'),
    createListBtn = document.querySelector('.create-list-btn__wrapper'),
    createListBtnContent = `
      <button class="create-list-btn">
        <svg class="create-list-btn__img"><use xlink:href="./src/assets/img/icons.svg#new-list-btn" /></svg>
        <span class="create-list-btn__txt">Create new list</span>
      </button>
    `;
  createListBtn.insertAdjacentHTML('afterbegin', createListBtnContent);
  header.addEventListener('click', createListBtnHandler);
  header.actualCards = actualCards;
}
function createListBtnHandler(event) {
  if (!event.target.closest('.create-list-btn')) return;
  const
    actualCards = event.currentTarget.actualCards,
    header = document.querySelector('.header'),
    board = document.querySelector('.board'),
    list = document.createElement('section');
  if (document.querySelector('.board__no-lists-message')) document.querySelector('.board__no-lists-message').remove();
  list.className = 'list';
  board.append(list);
  list.insertAdjacentHTML('afterbegin',
    `<div class="list__heading">
      <input class="list__create-list-input" type="text">
      <button class="list__heading-btn" disabled>
        <svg class="list__heading-img"><use xlink:href="./src/assets/img/icons.svg#list-heading-btn" /></svg>
      </button>
    </div>`);
  document.querySelector('.list__create-list-input').focus();
  header.removeEventListener('click', createListBtnHandler);
  document.addEventListener('click', clickAway, true);
  document.actualCards = actualCards;
  function clickAway(event) {
    if (event.target.className === 'list__create-list-input') return;
    if (!actualCards.statuses.length) {
      board.insertAdjacentHTML('afterbegin', `
        <div class="board__no-lists-message">
          <p>No lists yet</p>
          <p>Click "Create new list" button to add one</p>
        </div>
      `);
    }
    createList(actualCards);
    document.removeEventListener('click', clickAway, true);
    header.addEventListener('click', createListBtnHandler);
  }
}
function createList(actualCards) {
  const createListInput = document.querySelector('.list__create-list-input');
  if(!createListInput.value.trim()) {
    createListInput.closest('section').remove();
    return;
  }
  actualCards.statuses.push({text: createListInput.value});
  sendToStorage(actualCards);
  createListInput.remove();
}