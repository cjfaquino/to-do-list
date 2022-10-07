import './style.css';

import * as demo from './components/test';
import { renderInbox, renderProjects, renderToDos } from './components/renderItems';
import { sidebar, sortDateBtn, listView } from './components/DOMelements';

export let notesArr = [];
export let projects = [];
export let currentProject;

export function updateProjects(item){
  return projects = item;
}
export function updateCurrentProject(item) {
  return currentProject = item;
}

function updateNotes(item) {
  return notesArr = item;
}

export function changeDateFormat(dateISOstring){
  if(!dateISOstring) return '';
  const split = dateISOstring.split('-');
  const newDate = `${split[1]}/${split[2]}/${split[0]}`;
  return newDate
}

export function colorSelected(e){
  const selectable = sidebar.querySelectorAll('.selectable')
  selectable.forEach(el=>{
    el.classList.remove('selected');
  })
  e.currentTarget.classList.add('selected')
}

export function sortDate() {
  if (!sortDateBtn.dataset.sort) {
    sortDateBtn.dataset.sort = 'asc'
  }
  projects.forEach(el => {
    el.list.sort(function (a, b) {
      if (sortDateBtn.dataset.sort === 'asc') {
        if (a.dueDate > b.dueDate)
          return 1;
        if (a.dueDate < b.dueDate)
          return -1;
      }
      else if(sortDateBtn.dataset.sort === 'dsc'){
        if (a.dueDate > b.dueDate)
          return -1;
        if (a.dueDate < b.dueDate)
          return 1;
      }
      return 0;
    });
  });
  if (sortDateBtn.dataset.sort === 'asc') {
    sortDateBtn.dataset.sort = 'dsc';
    sortDateBtn.innerHTML = '<i class="fa-solid fa-sort-up"></i>'
  } else if(sortDateBtn.dataset.sort === 'dsc') {
    sortDateBtn.dataset.sort = 'asc';
    sortDateBtn.innerHTML = '<i class="fa-solid fa-sort-down"></i>'
  }
  removeAllChildNodes(listView)
  renderToDos(currentProject)
}

export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

export function setLocalStorage(storedName, dataArr){
  localStorage.setItem(storedName, JSON.stringify(dataArr))
}

function getLocalStorage(storedName){
  if (storedName === 'projects') {
    updateProjects(JSON.parse(localStorage.getItem(storedName)))
  } 
  else if (storedName === 'notes') {
    updateNotes(JSON.parse(localStorage.getItem(storedName)))
  }
}


if(typeof localStorage.projects === 'undefined') {
  demo.todos();
  setLocalStorage('projects', projects)
}
if (typeof localStorage.notes === 'undefined') {
  demo.notes();
  setLocalStorage('notes', notesArr)
}

// localStorage.clear()
getLocalStorage('projects');
getLocalStorage('notes');
renderProjects();
renderInbox();