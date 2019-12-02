import { addHeader } from './containers/header/header.mjs';
import { addBoard } from './containers/main/board.mjs';
import { addFooter } from './containers/footer/footer.mjs';

const
mockCards = {
statuses:
  [
    {text: 'Backlog'},
    {text: 'Ready'},
    {text: 'In progress'},
    {text: 'Finished'}
  ],
issues:
  [
    { desc: 'Login page - performance issues', status: '0' },
    { desc: 'Sprint bugfix', status: '0' },
    { desc: 'Shop page - performance issues', status: '1' },
    { desc: 'Checkout bugfix', status: '1' },
    { desc: 'User page - performance issues', status: '2' },
    { desc: 'Auth bugfix', status: '2' },
    { desc: 'Main page - performance issues', status: '3' },
    { desc: 'Main page bugfix', status: '3' }
  ]
},
storedCards = JSON.parse(localStorage.getItem('kanbanCards')),
actualCards = storedCards || mockCards;

addHeader();
addBoard(actualCards);
addFooter();