import './style.css';

import { test } from './components/test';
import { createNewInput } from './components/createNewInput';
import { renderInbox, renderToday, renderWeekly, renderNotes, renderProjects, renderToDos } from './components/renderItems';


export let projects = [];
export let currentProject;

export function updateProjects(item){
  return projects = item;
}
export function updateCurrentProject(item) {
  return currentProject = item;
}


export const main = document.querySelector('main')
const sidebar = main.querySelector('.sidebar')
const inbox = sidebar.querySelector('#inbox')
const today = sidebar.querySelector('#today')
const weekly = sidebar.querySelector('#week')
const notes = sidebar.querySelector('#notes')
const selectable = sidebar.querySelectorAll('.selectable')

export const projectsView = main.querySelector('.projectsView')
const projectsBtn = main.querySelector('.projectsBtn')

const list = main.querySelector('.list')
export const listView = list.querySelector('.listView')
export const listBtn = list.querySelector('.listBtn')
export const dateLabel = list.querySelector('.dueDate')
export const sortDateBtn = list.querySelector('.sortDate');

export let listTitle = list.querySelector('.listTitle');

projectsBtn.addEventListener('click', createNewInput(projectsView, 'project'))
listBtn.addEventListener('click', createNewInput(listView, 'todo'))
inbox.addEventListener('click', renderInbox)
today.addEventListener('click', renderToday)
weekly.addEventListener('click', renderWeekly)
notes.addEventListener('click', renderNotes)
sortDateBtn.addEventListener('click', sortDate)
selectable.forEach(el=>{
  el.addEventListener('click', colorSelected)
})


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

function sortDate() {
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

export function setLocalStorage(){
  localStorage.setItem('projects', JSON.stringify(projects))
}

function getLocalStorage(){
  updateProjects(JSON.parse(localStorage.getItem('projects')))
}


if(typeof localStorage.projects === 'undefined') {
  test();
  localStorage.setItem('projects', JSON.stringify(projects));
}

// localStorage.clear()
getLocalStorage();
renderProjects();
renderInbox();