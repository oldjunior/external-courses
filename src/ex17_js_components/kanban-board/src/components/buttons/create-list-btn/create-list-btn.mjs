export function addCreateListBtn() {
  const createListBtn = document.querySelector('.create-list-btn__wrapper');
  const createListBtnContent = `
    <button class="create-list-btn">
    <svg class="create-list-btn__img"><use xlink:href="./src/assets/img/icons.svg#new-list-btn" /></svg>
    <span class="create-list-btn__txt">Create new list</span>
    </button>
  `;
  createListBtn.insertAdjacentHTML('afterbegin', createListBtnContent);
}