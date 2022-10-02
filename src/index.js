import './style.css';

import { List } from './components/List';
import { ToDo } from './components/ToDo';
import { test } from './components/test';


// let inboxList = new List('Inbox');
let projects = [];
let currentProject;


const main = document.querySelector('main')
const sidebar = main.querySelector('.sidebar')
const inbox = sidebar.querySelector('#inbox')
const selectable = sidebar.querySelectorAll('.selectable')

const projectsView = main.querySelector('.projectsView')
const projectsBtn = main.querySelector('.projectsBtn')

const list = main.querySelector('.list')
const listView = list.querySelector('.listView')
const listBtn = list.querySelector('.listBtn')
const dateLabel = list.querySelector('.dueDate')
const sortDateBtn = list.querySelector('.sortDate');

let listTitle = list.querySelector('.listTitle');

projectsBtn.addEventListener('click', createNewInput(projectsView, 'project'))
listBtn.addEventListener('click', createNewInput(listView, 'todo'))
inbox.addEventListener('click', renderInbox)
sortDateBtn.addEventListener('click', sortDate)
selectable.forEach(el=>{
  el.addEventListener('click', colorSelected)
})


test();
renderProjects();
renderInbox();


function changeDateFormat(dateISOstring){
  if(!dateISOstring) return '';
  const split = dateISOstring.split('-');
  const newDate = `${split[1]}/${split[2]}/${split[0]}`;
  return newDate
}

function colorSelected(e){
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
    sortDateBtn.textContent = 'ascending'
  } else if(sortDateBtn.dataset.sort === 'dsc') {
    sortDateBtn.dataset.sort = 'asc';
    sortDateBtn.textContent = 'descending'
  }
  removeAllChildNodes(listView)
  renderToDos(currentProject)
}

function renderInbox(){
  listBtn.remove();
  sortDateBtn.remove();
  main.dataset.list = 'allInbox'
  listTitle.textContent = 'Inbox';
  removeAllChildNodes(listView)
  projects.forEach(el=>{
    renderToDos(el)
  })
}

function renderToDos(projectArray) {
  projectArray.list.forEach(el => {
    const li = createNewToDoDOM(el, projectArray);
    listView.appendChild(li);
    currentProject = projectArray;
  });
}

function createNewToDoDOM(el, projectArray) {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const span = document.createElement('span');
  const edit = document.createElement('div');
  const del = document.createElement('div');
  const check = document.createElement('input');
  const desc = document.createElement('div');
  check.type = 'checkbox';
  check.classList.add('checkComplete');
  edit.textContent = 'edit'; //placeholder for icon
  edit.classList.add('editBtn');
  del.textContent = 'del'; //placeholder for icon
  del.classList.add('deleteBtn');
  p.textContent = el.name;
  span.textContent = changeDateFormat(el.dueDate);
  desc.textContent = el.desc;
  li.append(check, p, span, edit, del, desc)
  li.classList.add('todo');
  desc.classList.add('todoDesc');
  desc.classList.add('collapse');
  edit.classList.add('hide');
  del.classList.add('hide');
  if(el.completed){
    p.classList.add('strike');
    span.classList.add('strike');
    check.checked = true;
    edit.classList.remove('hide')
    del.classList.remove('hide')
  }
  edit.addEventListener('click', editTodo(el))
  del.addEventListener('click', deleteTodo(projectArray));
  li.addEventListener('mouseenter', unhideOptions(del, edit))
  li.addEventListener('mouseleave', hideOptions(el, del, edit))
  check.addEventListener('click', toggleCompleted(el))
  p.addEventListener('click', toggleDesc)
  return li;

  function toggleDesc() {
      desc.classList.toggle('collapse');
  }

  function editTodo(el) {
    return () => { 
      createEditInput(el)
    };
  }

  function hideOptions(el, del, edit) {
    return () => {
      if(!el.completed){
        del.classList.add('hide');
        edit.classList.add('hide');
      }
    };
  }

  function unhideOptions(del, edit) {
    return () => {
      del.classList.remove('hide');
      edit.classList.remove('hide');
    };
  }

  function deleteTodo(projectArray) {
    return () => {
      projectArray.delTodo(el)
      removeAllChildNodes(listView);
      removeAllChildNodes(projectsView);
      renderProjects();
      if(main.dataset.list==='allInbox') {
        renderInbox();
      } else {renderToDos(projectArray)}
    }
  }

  function toggleCompleted(el) {
    return () => {
      el.toggleComp();
      if(!el.completed){
        p.classList.remove('strike')
        span.classList.remove('strike')
      } else {
        p.classList.add('strike')
        span.classList.add('strike')
      } 
    };
  }
}

function renderProjects() {
  projects.forEach((el, index) => {
    const li = createNewProjectDOM(el, index);
    projectsView.appendChild(li);
  });
}

function createNewProjectDOM(item, index) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const p = document.createElement('p');
  const del = document.createElement('div');
  del.textContent = 'del'; //placeholder for icon
  span.textContent = item.list.length;
  span.classList.add('projectLength');
  p.textContent = item.name;
  li.classList.add('projectItem');
  li.classList.add('selectable');
  li.appendChild(span);
  li.appendChild(p);
  li.appendChild(del);
  li.addEventListener('click', colorSelected)
  p.addEventListener('click', renderSelected)
  span.addEventListener('click', renderSelected)
  del.addEventListener('click', deleteProject(item))
  return li;

  function deleteProject(item) {
    return () => {
      projects = projects.filter(key => key != item);
      removeAllChildNodes(projectsView);
      renderProjects();
      renderInbox();
    };
  }

  function renderSelected() {
      main.dataset.list = item.name;
      currentProject = item;
      listTitle.textContent = item.name;
      listTitle.after(listBtn)
      dateLabel.append(sortDateBtn)
      removeAllChildNodes(listView);
      renderToDos(projects[index]);
    };
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function createEditInput(el){
  const edits = document.createElement('div');
  const div = document.createElement('div');
  const labelName = document.createElement('label');
  const labelDate = document.createElement('label');
  const labelDesc = document.createElement('label');
  const newName = document.createElement('input');
  const newDate = document.createElement('input');
  const newDesc = document.createElement('textarea');
  const accept = document.createElement('button');
  const cancel = document.createElement('button');

  edits.classList.add('edits');
  div.classList.add('editInputs');

  labelName.textContent = 'Name:';
  labelDate.textContent = 'Due:';
  labelDesc.textContent = 'Description:';
  labelName.htmlFor = 'editName';
  labelDate.htmlFor = 'editDate';
  labelDesc.htmlFor = 'editDesc';
  newName.id = 'editName';
  newDate.id = 'editDate';
  newDesc.id = 'editDesc';
  newName.type = 'text';
  newDate.type = 'date';
  newName.value = el.name;
  newDate.value = el.dueDate;
  newDesc.value = el.desc;
  
  accept.id = 'editAccept';
  cancel.id = 'editCancel';
  accept.textContent = 'Confirm'; 
  cancel.textContent = 'Cancel';
  div.append(labelName, newName, labelDesc, newDesc, labelDate, newDate, accept, cancel);
  edits.append(div);
  main.append(edits)
  
  accept.addEventListener('click', updateTodo(el));
  cancel.addEventListener('click', cancelEdit);
  
  function cancelEdit(){
    edits.remove();
  }

  function updateTodo(el) {
    return  () => {
      const name = newName.value;
      const due = newDate.value;
      const desc = newDesc.value;
      el.setName(name);
      el.setDate(due);
      el.setDesc(desc);
      
      removeAllChildNodes(edits);
      removeAllChildNodes(listView);
      if(main.dataset.list==='allInbox') {
        renderInbox();
      } else {renderToDos(currentProject)};
      edits.remove();
    };
  }
}

function createNewInput(view, type) {
  return () => {
    const div = document.createElement('div');
    const newName = document.createElement('input');
    const newDate = document.createElement('input');
    const newDesc = document.createElement('textarea');
    const confirm = document.createElement('button');
    const cancel = document.createElement('button');
    const bottomRow = document.createElement('div');
    div.classList.add('newInputs');
    newName.classList.add('newName');
    newDate.classList.add('newDate');
    newDesc.classList.add('newDesc');
    confirm.classList.add('confirmNew');
    cancel.classList.add('cancelNew');
    bottomRow.classList.add('newInputBottom');
    newName.placeholder = `add a ${type}...`
    newDesc.placeholder = 'add a breif description'
    newName.type = 'text';
    newDate.type = 'date';
    confirm.textContent = 'Confirm';
    cancel.textContent = 'Cancel';

    removeAllChildNodes(view);
    div.append(newName);
    
    
    if(type==='project'){
      div.append(confirm, cancel)
      renderProjects();
      newName.addEventListener('keypress', createNewItem(
        newName, projectsView, type))
      confirm.addEventListener('click', createNewItem(
        newName, projectsView, type))
      };
 
    if(type==='todo'){
      bottomRow.append(newDate, confirm, cancel)
      div.append(newDesc, bottomRow);
      renderToDos(currentProject);
      newName.addEventListener('keypress', createNewItem(
        newName, listView, type, newDate, newDesc))
      confirm.addEventListener('click', createNewItem(
        newName, listView, type, newDate, newDesc))
      };
    
    cancel.addEventListener('click', ()=>div.remove());
    view.append(div);
    newName.select();
  };
}

function createNewItem(newName, view, type, newDate, newDesc) {
  return (e) => {
    if (e.key === 'Enter' || e.target.classList == 'confirmNew') {
      const name = newName.value;
      removeAllChildNodes(view);

      if(type==='project'){
        createNewProject(name)
        renderProjects();
      }

      if(type==='todo'){
        createNewTodo(name, newDate, newDesc);
        renderToDos(currentProject);
        removeAllChildNodes(projectsView);
        renderProjects();
      }
    }
  };
}

function createNewTodo(name, newDate, newDesc) {
  const todo = new ToDo(name, newDate.value, newDesc.value);
  currentProject.list.push(todo);
}

export function createNewProject(name){
  const list = new List(name);
  projects.push(list);
  return list;
}