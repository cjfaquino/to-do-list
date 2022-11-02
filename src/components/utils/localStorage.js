import * as demo from '../test';
import {
  updateProjects,
  updateNotes,
  getProjects,
  getNotes,
} from '../../updateProjects';

export function setLocalStorage(storedName, dataArr) {
  localStorage.setItem(storedName, JSON.stringify(dataArr));
}
export function getLocalStorage(storedName) {
  if (storedName === 'projects') {
    updateProjects(JSON.parse(localStorage.getItem(storedName)));
  } else if (storedName === 'notes') {
    updateNotes(JSON.parse(localStorage.getItem(storedName)));
  }
}
if (typeof localStorage.projects === 'undefined') {
  demo.todos();
  const projects = getProjects();
  setLocalStorage('projects', projects);
}
if (typeof localStorage.notes === 'undefined') {
  demo.notes();
  const notesArr = getNotes();
  setLocalStorage('notes', notesArr);
}
