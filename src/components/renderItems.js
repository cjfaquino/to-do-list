import { createNewProjectDOM } from './createNewProjectDOM';
import { createNewToDoDOM } from './todos/createToDoDOM';
import { addNoteBtn } from './notes/createNewNote';
import {
  projects,
  updateCurrentProject,
  setLocalStorage,
  notesArr,
} from '../index';
import {
  listTitle,
  dateLabel,
  listBtn,
  main,
  listView,
  projectsView,
} from './DOMelements';
import { createNewNoteDOM } from './notes/createNewNoteDOM';
import removeAllChildNodes from './utils/removeAllChildNodes';
import { resetSortBtn } from './utils/dateFunc';

export function renderInbox() {
  listTitle.after(dateLabel);
  listBtn.remove();
  resetSortBtn();
  main.dataset.list = 'allInbox';
  listTitle.textContent = 'Inbox';
  removeAllChildNodes(listView);
  projects.forEach((el) => {
    renderToDos(el);
  });
}
export function renderToday() {
  listTitle.after(dateLabel);
  listBtn.remove();
  resetSortBtn();
  removeAllChildNodes(listView);
  main.dataset.list = 'TodaySection';
  listTitle.textContent = 'Today';
}
export function renderWeekly() {
  listTitle.after(dateLabel);
  listBtn.remove();
  addNoteBtn.remove();
  resetSortBtn();
  removeAllChildNodes(listView);
  main.dataset.list = 'WeeklySection';
  listTitle.textContent = 'This Week';
}
export function renderNotes() {
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

export function renderToDos(projectArray) {
  addNoteBtn.remove();
  resetSortBtn();
  projectArray.list.forEach((el) => {
    const li = createNewToDoDOM(el, projectArray);
    listView.appendChild(li);
    updateCurrentProject(projectArray);
  });
  setLocalStorage('projects', projects);
}

export function renderProjects() {
  addNoteBtn.remove();
  resetSortBtn();
  projects.forEach((el, index) => {
    const li = createNewProjectDOM(el, index);
    projectsView.appendChild(li);
  });
  setLocalStorage('projects', projects);
}
