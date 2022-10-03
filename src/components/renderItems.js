import { createNewProjectDOM } from './createNewProjectDOM';
import { createNewToDoDOM } from './createNewToDoDOM';
import { listTitle, dateLabel, listBtn, sortDateBtn, main, removeAllChildNodes, listView, projects, updateCurrentProject, projectsView } from '../index';


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
  removeAllChildNodes(listView);
  main.dataset.list = 'TodaySection';
  listTitle.textContent = 'Today';
}
export function renderWeekly() {
  listTitle.after(dateLabel);
  listBtn.remove();
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
}

export function renderToDos(projectArray) {
  projectArray.list.forEach(el => {
    const li = createNewToDoDOM(el, projectArray);
    listView.appendChild(li);
    updateCurrentProject(projectArray);
  });
}

export function renderProjects() {
  projects.forEach((el, index) => {
    const li = createNewProjectDOM(el, index);
    projectsView.appendChild(li);
  });
}
