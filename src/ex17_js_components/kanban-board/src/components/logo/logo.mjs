export function addLogo() {
  return `
    <svg class="app-logo__img"><use xlink:href="./src/assets/img/logo.svg#logo" /></svg>
    <span class="app-logo__txt">Awesome Kanban Board</span>
  `;
}