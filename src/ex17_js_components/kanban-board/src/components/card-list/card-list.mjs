import { addCardListContextBtn } from '../../components/buttons/card-list-context-btn/card-list-context-btn.mjs';
import { addCards } from '../../components/card/card.mjs';
import { addCardBtn } from '../../components/buttons/add-card-btn/add-card-btn.mjs';

export function addLists(actualCards) {
  const board = document.querySelector('.board');
  board.innerHTML = '';
  actualCards.statuses.forEach((status, index) => {
    const list = document.createElement('section');
    list.className = 'list'
    board.append(list);
    list.insertAdjacentHTML('afterbegin',
    `<div class="list__heading">
    <h3 class="list__heading-txt">${status.text}</h3>
    ${addCardListContextBtn()}
    </div>`);
    list.append(addCards(actualCards, index));
    list.insertAdjacentHTML('beforeend', addCardBtn(index));
  if (index > 0) disableAddBtn(index);
  });
  function disableAddBtn(cardStatus) {
    let isEmptyList = true;
    actualCards.issues.forEach(issue => {
      if (+issue.status === cardStatus - 1) {
        isEmptyList = false;
      }
    });
    if(isEmptyList) {
      document.getElementById(cardStatus).disabled = true;
      document.getElementById(cardStatus).classList.add('list__add-card-btn_disabled');
    }
  }
}
