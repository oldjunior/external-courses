export function addCards(actualCards, cardStatus) {
  const cardList = document.createElement('ul');
  cardList.className = 'list__card-list';
  actualCards.issues.forEach(issue => {
    const cardListItem = document.createElement('li');
    cardListItem.className = 'list__card-list-item';
    if (+issue.status === cardStatus) {
      cardListItem.insertAdjacentText('afterbegin', issue.desc);
      cardList.append(cardListItem);
    }
  });
  return cardList;
}