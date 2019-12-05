export function addFooter(actualCards) {
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
  displayStat(actualCards);
}
export function displayStat(actualCards) {
  const
    actTasksCounter = document.querySelector('.act-tasks__count'),
    finTasksCounter = document.querySelector('.fin-tasks__count');
  let
    activeTasks = 0,
    finishedTasks = 0;
  actualCards.issues.forEach(issue => {
    if (+issue.status === actualCards.statuses.length - 1) finishedTasks += 1;
  });
  activeTasks = actualCards.issues.length - finishedTasks;
  actTasksCounter.innerHTML = '';
  finTasksCounter.innerHTML = '';
  actTasksCounter.insertAdjacentText('afterbegin', activeTasks);
  finTasksCounter.insertAdjacentText('afterbegin', finishedTasks);
}