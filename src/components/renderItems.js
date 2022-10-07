import { createNewProjectDOM } from './createNewProjectDOM';
import { createNewToDoDOM } from './createNewToDoDOM';
import { addNoteBtn } from './createNewNoteDOM';
import { listTitle, dateLabel, listBtn, sortDateBtn, main, removeAllChildNodes, listView, projects, updateCurrentProject, projectsView, setLocalStorage, notesArr } from '../index';


export function renderInbox() {
  listTitle.after(dateLabel);
  listBtn.remove();
  sortDateBtn.remove();
  main.dataset.list = 'allInbox';
  listTitle.textContent = 'Inbox';
  removeAllChildNodes(listView);
  projects.forEach(el => {
    renderToDos(el);
  });
}
export function renderToday() {
  listTitle.after(dateLabel);
  listBtn.remove();
  addNoteBtn.remove()
  removeAllChildNodes(listView);
  main.dataset.list = 'TodaySection';
  listTitle.textContent = 'Today';
}
export function renderWeekly() {
  listTitle.after(dateLabel);
  listBtn.remove();
  addNoteBtn.remove()
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
  listTitle.after(addNoteBtn)
  notesArr.forEach(el => {
    listView.append(el)
  })
}

export function renderToDos(projectArray) {
  addNoteBtn.remove()
  projectArray.list.forEach(el => {
    const li = createNewToDoDOM(el, projectArray);
    listView.appendChild(li);
    updateCurrentProject(projectArray);
  });
  setLocalStorage();
}

export function renderProjects() {
  addNoteBtn.remove()
  projects.forEach((el, index) => {
    const li = createNewProjectDOM(el, index);
    projectsView.appendChild(li);
  });
  setLocalStorage()
}
