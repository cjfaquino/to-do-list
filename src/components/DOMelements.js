import createNewInput from './inputs/createNewInputDOM';
import colorSelected from './utils/colorSelected';
import { sortDate } from './utils/dateFunc';
import {
  renderInbox,
  renderToday,
  renderWeekly,
  renderNotes,
} from './renderItems';

export const main = document.querySelector('main');
export const sidebar = main.querySelector('.sidebar');
const inbox = sidebar.querySelector('#inbox');
const today = sidebar.querySelector('#today');
const weekly = sidebar.querySelector('#week');
const notes = sidebar.querySelector('#notes');
const selectable = sidebar.querySelectorAll('.selectable');

export const projectsView = main.querySelector('.projectsView');
const projectsBtn = main.querySelector('.projectsBtn');
const list = main.querySelector('.list');
export const listView = list.querySelector('.listView');
export const listBtn = list.querySelector('.listBtn');
export const dateLabel = list.querySelector('.dueDate');
export const sortDateBtn = list.querySelector('.sortDate');

export const listTitle = list.querySelector('.listTitle');
projectsBtn.addEventListener('click', createNewInput(projectsView, 'project'));
listBtn.addEventListener('click', createNewInput(listView, 'todo'));
inbox.addEventListener('click', renderInbox);
today.addEventListener('click', renderToday);
weekly.addEventListener('click', renderWeekly);
notes.addEventListener('click', renderNotes);
sortDateBtn.addEventListener('click', sortDate);
selectable.forEach((el) => {
  el.addEventListener('click', colorSelected);
});
