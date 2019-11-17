'use strict';
const
  mockCards = {
  statuses:
    [
      {text: 'Backlog'},
      {text: 'Ready'},
      {text: 'In progress'},
      {text: 'Finished'}
    ],
  issues:
    [
      { desc: 'Login page - performance issues', status: '0' },
      { desc: 'Sprint bugfix', status: '0' },
      { desc: 'Shop page - performance issues', status: '1' },
      { desc: 'Checkout bugfix', status: '1' },
      { desc: 'User page - performance issues', status: '2' },
      { desc: 'Auth bugfix', status: '2' },
      { desc: 'Main page - performance issues', status: '3' },
      { desc: 'Main page bugfix', status: '3' }
    ]
  },
  storedCards = JSON.parse(localStorage.getItem('kanbanCards')),
  actualCards = storedCards || mockCards,
  board = document.querySelector('.board');

function createLists(cards) {
  board.innerHTML = '';
  cards.statuses.forEach((status, index) => {
    const list = document.createElement('section');
    list.className = 'list'
    board.append(list);
    list.insertAdjacentHTML('afterbegin',
    `<div class="list__heading">
    <h3 class="list__heading-txt">${status.text}</h3>
    <button class="list__heading-btn"><svg class="list__heading-img"><use xlink:href="assets/icons.svg#list-heading-btn" /></svg></button>
    </div>`);
    list.append(createCards(cards, index));
    list.insertAdjacentHTML('beforeend',
    `<button class="list__add-card-btn" id="${index}">
    <svg class="list__add-card-img"><use xlink:href="assets/icons.svg#add-card-btn" /></svg>
    <span class="list__add-card-txt">Add card</span>
  </button>`);
  });
}
function createCards(cards, cardStatus) {
  const cardList = document.createElement('ul');
  cardList.className = 'list__card-list';
  cards.issues.forEach(issue => {
    const cardListItem = document.createElement('li');
    cardListItem.className = 'list__card-list-item';
    if (+issue.status === cardStatus) {
      cardListItem.insertAdjacentText('afterbegin', issue.desc);
      cardList.append(cardListItem);
    }
  });
  return cardList;
}
function addCardBtnHandler() {
  if (event.target.className !== "list__add-card-btn" && event.target.parentNode.className) {
    if (event.target.parentNode.className !== "list__add-card-btn") return;
  }
  const
    issueStatus = +event.target.id || +event.target.parentNode.id,
    cardList = document.querySelectorAll('.list')[issueStatus].querySelector('.list__card-list');
  if (issueStatus === 0) {
    const
      cardListItem = document.createElement('li'),
      addCardTxtField = document.createElement('input');
      cardListItem.classList.add('list__card-list-item');
      cardListItem.classList.add('input-item');
    addCardTxtField.type = 'text';
    addCardTxtField.className = 'list__add-card-input';
    cardList.append(cardListItem);
    cardListItem.append(addCardTxtField);
    addCardTxtField.focus();
    document.addEventListener('click', clickAway, true);
  } else {
    const
      addCardSelect = document.createElement('select'),
      cardListItem = document.createElement('li');
    cardListItem.classList.add('list__card-list-item');
    cardListItem.classList.add('input-item');
    addCardSelect.className = 'list__add-card-select';
    cardList.append(cardListItem);
    cardListItem.append(addCardSelect);
    actualCards.issues.forEach(card => {
      if (+card.status === issueStatus - 1) {
        const addCardSelectOption = document.createElement('option');
        addCardSelectOption.value = card.status;
        addCardSelectOption.textContent = card.desc;
        addCardSelect.append(addCardSelectOption);
      }
    });
    document.addEventListener('click', clickAway(issueStatus), true);
  }
}
function clickAway(status) {
  if (!status) {
    if (event.target.className !== 'list__add-card-input' && event.target.id !== "0" & event.target.parentNode.id !== "0") {
      addCard();
      document.removeEventListener('click', clickAway, true);
    }
  } else {
    moveCard(status);
    document.removeEventListener('click', clickAway, true);
  }
}
function addCard() {
  document.querySelectorAll('.list__add-card-input').forEach(input => {
    if(input.value.trim()) actualCards.issues.push({desc: input.value, status: '0'});
    input.parentNode.remove();
  });
  sendToStorage();
}
function moveCard(status) {
  document.querySelectorAll('.list')[status].querySelector('.list__add-card-select').parentNode.remove();
}
function sendToStorage() {
  localStorage.setItem('kanbanCards', JSON.stringify(actualCards));
  createLists(actualCards);
}
createLists(actualCards);
board.addEventListener('click', addCardBtnHandler);