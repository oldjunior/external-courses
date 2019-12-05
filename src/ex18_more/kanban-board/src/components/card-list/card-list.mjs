import { addCards } from '../../components/card/card.mjs';
import { addCardBtn } from '../../components/buttons/add-card-btn/add-card-btn.mjs';
import { addCardListContextBtn } from '../../components/buttons/card-list-context-btn/card-list-context-btn.mjs';

export function addLists(actualCards) {
  const board = document.querySelector('.board');
  board.innerHTML = '';
  if (!actualCards.statuses.length) {
    board.insertAdjacentHTML('afterbegin', `
      <div class="board__no-lists-message">
        <p>No lists here yet</p>
        <p>Click "Create new list" to add one</p>
      </div>
    `);
    return;
  }
  actualCards.statuses.forEach((status, index) => {
    if (!status) return;
    const list = document.createElement('section');
    list.className = 'list';
    list.id = index;
    board.append(list);
    list.insertAdjacentHTML('afterbegin', `
      <div class="list__heading">
        <h3 class="list__heading-txt">${status.text}</h3>
        <div class="list__context-menu">
        </div>
      </div>
    `);
    if (!actualCards.issues.some(issue => issue.status === index + '')) {
      const message = document.createElement('span');
      message.className = 'list__no-cards-message';
      message.insertAdjacentText('afterbegin', 'No cards here yet');
      list.append(message);
    }
    list.append(addCards(actualCards, index));
    list.insertAdjacentHTML('beforeend', addCardBtn(index));
  disableAddBtn(index);
  });
  function disableAddBtn(cardStatus) {
    let firstList, prevList, isEmptyList = true;
    for (let i = 0; i < actualCards.statuses.length; i++) {
      if (!actualCards.statuses[i]) continue;
      firstList = i;
      break;
    }
    if (firstList === cardStatus) return;
    for (let i = 0; i < cardStatus; i++) {
      if (!actualCards.statuses[i]) continue;
      prevList = i;
    }
    actualCards.issues.forEach(issue => {
      if (+issue.status === prevList) {
        isEmptyList = false;
      }
    });
    if(isEmptyList) {
      document.getElementById(cardStatus).querySelector('.list__add-card-btn').disabled = true;
      document.getElementById(cardStatus).querySelector('.list__add-card-btn').classList.add('list__add-card-btn_disabled');
    }
  }
  addCardListContextBtn(actualCards);
}