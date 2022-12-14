import { createNewProjectDOM } from './createNewProjectDOM';
import { addNoteBtn } from './notes/createNewNote';
import { filterDate, resetSortBtn } from './utils/dateFunc';
import createNewNoteDOM from './notes/createNewNoteDOM';
import removeAllChildNodes from './utils/removeAllChildNodes';
// eslint-disable-next-line import/no-named-as-default
import createToDoDOM from './todos/createToDoDOM';
import { setLocalStorage } from './utils/localStorage';
import { updateCurrentProject, getProjects, getNotes } from '../updateProjects';
import {
  listTitle,
  dateLabel,
  listBtn,
  main,
  listView,
  projectsView,
} from './DOMelements';

export function renderToDos(projectArray) {
  const projects = getProjects();
  addNoteBtn.remove();
  resetSortBtn();
  projectArray.list.forEach((el) => {
    const li = createToDoDOM(el, projectArray);
    listView.appendChild(li);
    updateCurrentProject(projectArray);
  });
  setLocalStorage('projects', projects);
}

export function renderProjects() {
  const projects = getProjects();
  addNoteBtn.remove();
  resetSortBtn();
  projects.forEach((el, index) => {
    const li = createNewProjectDOM(el, index);
    projectsView.appendChild(li);
  });
  setLocalStorage('projects', projects);
}

const renderAllTodos = () => {
  const projects = getProjects();
  projects.forEach((el) => {
    renderToDos(el);
  });
};

export function renderInbox() {
  listTitle.after(dateLabel);
  listBtn.remove();
  resetSortBtn();
  main.dataset.list = 'allInbox';
  listTitle.textContent = 'Inbox';
  removeAllChildNodes(listView);
  renderAllTodos();
}
export function renderToday() {
  listTitle.after(dateLabel);
  listBtn.remove();
  resetSortBtn();
  removeAllChildNodes(listView);
  main.dataset.list = 'TodaySection';
  listTitle.textContent = 'Today';
  renderAllTodos();
  filterDate('today');
}
export function renderWeekly() {
  listTitle.after(dateLabel);
  listBtn.remove();
  addNoteBtn.remove();
  resetSortBtn();
  removeAllChildNodes(listView);
  main.dataset.list = 'WeeklySection';
  listTitle.textContent = 'This Week';
  renderAllTodos();
  filterDate('week');
}
export function renderNotes() {
  const notesArr = getNotes();
  removeAllChildNodes(listView);
  dateLabel.remove();
  listBtn.remove();
  main.dataset.list = 'NotesSection';
  listTitle.textContent = 'Notes';
  listTitle.after(addNoteBtn);
  notesArr.forEach((el) => {
    createNewNoteDOM(el);
  });
}
