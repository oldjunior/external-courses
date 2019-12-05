import { sendToStorage } from '../../../index.js';
export function addCardBtn() {
  return `
    <button class="list__add-card-btn">
      <svg class="list__add-card-img"><use xlink:href="./src/assets/img/icons.svg#add-card-btn" /></svg>
      <span class="list__add-card-txt">Add card</span>
    </button>
  `;
}
export function addCardBtnHandler(event) {
  const actualCards = event.currentTarget.actualCards;
if (!event.target.closest('.list__add-card-btn')) return;
const
  issueStatus = +event.target.closest('.list').id,
  cardList = document.getElementById(issueStatus).querySelector('.list__card-list');
  let isFirstList = true;
  for (let i = 0; i < issueStatus; i++) {
    if (!actualCards.statuses[i]) continue;
    isFirstList = false;
  }
if (isFirstList) {
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
  let prevList, addCardSelectOption = document.createElement('option');
  cardListItem.className = 'list__card-list-item';
  addCardSelect.className = 'list__add-card-select';
  cardList.append(cardListItem);
  cardListItem.append(addCardSelect);
  addCardSelectOption.value = '';
  addCardSelectOption.textContent = 'Choose card';
  addCardSelect.append(addCardSelectOption);
  for (let i = 0; i < issueStatus; i++) {
    if (!actualCards.statuses[i]) continue;
    prevList = i;
  }
  actualCards.issues.forEach((card, index) => {
    if (+card.status === prevList) {
      addCardSelectOption = document.createElement('option');
      addCardSelectOption.value = index;
      addCardSelectOption.textContent = card.desc;
      addCardSelect.append(addCardSelectOption);
    }
  });
  addCardSelect.focus();
  document.addEventListener('click', clickAway, true);
}
function clickAway(event) {
  if (isFirstList) {
    if (event.target.className === 'list__add-card-input' || event.target.closest('.list__add-card-btn')) return;
    addCard(issueStatus, actualCards);
    document.removeEventListener('click', clickAway, true);
  } else {
    if (event.target.className === 'list__add-card-select') return;
    moveCard(issueStatus, actualCards);
    document.removeEventListener('click', clickAway, true);
  }
}
}
function addCard(status, actualCards) {
  document.querySelectorAll('.list__add-card-input').forEach(input => {
    if(input.value.trim()) actualCards.issues.push({desc: input.value, status: status + ''});
    input.parentNode.remove();
  });
  sendToStorage(actualCards);
}
function moveCard(status, cards) {
  const actualCards = cards;
  const issueIndex = document.getElementById(status).querySelector('.list__add-card-select').value;
  if (issueIndex) actualCards.issues[issueIndex].status = status + '';
  document.getElementById(status).querySelector('.list__add-card-select').parentNode.remove();
  sendToStorage(actualCards);
}