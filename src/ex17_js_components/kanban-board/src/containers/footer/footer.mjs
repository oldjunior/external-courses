export function addFooter() {
  const footer = document.querySelector('.footer');
  const footerContent = `
    <div class="counter-group">
      <span class="act-tasks">
        <span class="act-tasks__txt">Active tasks: </span>
        <span class="act-tasks__count"></span>
      </span>
      <span class="fin-tasks">
        <span class="fin-tasks__txt">Finished tasks: </span>
        <span class="fin-tasks__count"></span>
      </span>
    </div>
    <div class="dev-info">Kanban board by Anton Utkin, 2019</div>
  `;
  footer.insertAdjacentHTML('afterbegin', footerContent);
}