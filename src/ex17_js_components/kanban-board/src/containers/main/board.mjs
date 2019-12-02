import { addLists } from '../../components/card-list/card-list.mjs';

export function addBoard(actualCards) {
  const board = document.querySelector('.board');
  addLists(actualCards);
  board.addEventListener('click', addCardBtnHandler);
  board.actualCards = actualCards;
}

function addCardBtnHandler() {
  const actualCards = event.currentTarget.actualCards;
if (event.target.className !== "list__add-card-btn" && event.target.parentNode) {
  if (event.target.parentNode.className !== "list__add-card-btn") return;
}
if (!event.target.parentNode) return;
const
  issueStatus = +event.target.id || +event.target.parentNode.id,
  cardList = document.querySelectorAll('.list')[issueStatus].querySelector('.list__card-list');
if (issueStatus === 0) {
  const
    cardListItem = document.createElement('li'),
    addCardTxtField = document.createElement('input');
    cardListItem.className = 'list__card-list-item';
  addCardTxtField.type = 'text';
  addCardTxtField.className = 'list__add-card-input';
  cardList.append(cardListItem);
  cardListItem.append(addCardTxtField);
  addCardTxtField.focus();
  document.addEventListener('click', clickAway, true);
  document.actualCards = actualCards;
} else {
  const
    addCardSelect = document.createElement('select'),
    cardListItem = document.createElement('li');
  let addCardSelectOption = document.createElement('option');
  cardListItem.className = 'list__card-list-item';
  addCardSelect.className = 'list__add-card-select';
  cardList.append(cardListItem);
  cardListItem.append(addCardSelect);
  addCardSelectOption.value = '';
  addCardSelectOption.textContent = 'Choose card';
  addCardSelect.append(addCardSelectOption);
  actualCards.issues.forEach((card, index) => {
    if (+card.status === issueStatus - 1) {
      addCardSelectOption = document.createElement('option');
      addCardSelectOption.value = index;
      addCardSelectOption.textContent = card.desc;
      addCardSelect.append(addCardSelectOption);
    }
  });
  addCardSelect.focus();
  document.addEventListener('click', clickAway, true);
  document.actualCards = actualCards;
}
function clickAway() {
  const actualCards = event.currentTarget.actualCards;
  if (!issueStatus) {
    if (!event.target.parentNode) return;
    if (event.target.className !== 'list__add-card-input' && event.target.id !== "0" && event.target.parentNode.id !== "0") {
      addCard(actualCards);
      document.removeEventListener('click', clickAway, true);
    }
  } else {
    if (event.target.className !== 'list__add-card-select') {
      moveCard(issueStatus, actualCards);
      document.removeEventListener('click', clickAway, true);
    }
  }
}
}
function addCard(actualCards) {
  document.querySelectorAll('.list__add-card-input').forEach(input => {
    if(input.value.trim()) actualCards.issues.push({desc: input.value, status: '0'});
    input.parentNode.remove();
  });
  sendToStorage(actualCards);
}
function moveCard(status, cards) {
  const actualCards = cards;
  const issueIndex = document.querySelectorAll('.list')[status].querySelector('.list__add-card-select').value;
  if (issueIndex) actualCards.issues[issueIndex].status = status + '';
  document.querySelectorAll('.list')[status].querySelector('.list__add-card-select').parentNode.remove();
  sendToStorage(actualCards);
}
function sendToStorage(actualCards) {
  localStorage.setItem('kanbanCards', JSON.stringify(actualCards));
  addLists(actualCards);
}