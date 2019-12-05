import { addCardBtnHandler } from '../../components/buttons/add-card-btn/add-card-btn.mjs';
import { addLists } from '../../components/card-list/card-list.mjs';

export function addBoard(actualCards) {
  const board = document.querySelector('.board');
  addLists(actualCards);
  board.addEventListener('click', addCardBtnHandler);
  board.actualCards = actualCards;
}