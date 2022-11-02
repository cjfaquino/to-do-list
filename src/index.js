import './style.css';

import * as demo from './components/test';
import { renderInbox, renderProjects } from './components/renderItems';

export let notesArr = [];
export let projects = [];
export let currentProject;

export function updateProjects(item) {
  return (projects = item);
}
export function updateCurrentProject(item) {
  return (currentProject = item);
}

function updateNotes(item) {
  return (notesArr = item);
}

export function setLocalStorage(storedName, dataArr) {
  localStorage.setItem(storedName, JSON.stringify(dataArr));
}

function getLocalStorage(storedName) {
  if (storedName === 'projects') {
    updateProjects(JSON.parse(localStorage.getItem(storedName)));
  } else if (storedName === 'notes') {
    updateNotes(JSON.parse(localStorage.getItem(storedName)));
  }
}

if (typeof localStorage.projects === 'undefined') {
  demo.todos();
  setLocalStorage('projects', projects);
}
if (typeof localStorage.notes === 'undefined') {
  demo.notes();
  setLocalStorage('notes', notesArr);
}

// localStorage.clear()
getLocalStorage('projects');
getLocalStorage('notes');
renderProjects();
renderInbox();
