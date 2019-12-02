export function addCardBtn(id) {
  return `
    <button class="list__add-card-btn" id="${id}">
      <svg class="list__add-card-img"><use xlink:href="./src/assets/img/icons.svg#add-card-btn" /></svg>
      <span class="list__add-card-txt">Add card</span>
    </button>
  `;
}