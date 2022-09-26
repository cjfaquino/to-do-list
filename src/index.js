import './style.css';

import { List } from './components/List';
import { ToDo } from './components/ToDo';

// let inboxList = new List('Inbox');
let projects = [];
let currentProject;


//test data
const test1 = new ToDo('test1', new Date().toISOString().split('T')[0])
const test2 = new ToDo('test2', new Date().toISOString().split('T')[0])
const test3 = new ToDo('test3')


const project1 = createNewProject('Project');
const project2 = createNewProject('Cleaning');

console.log(projects);


project1.list.push(test3)
project1.list.push(test1)
project2.list.push(test2)
test1.toggleComp();

const main = document.querySelector('main')
const inbox = main.querySelector('#inbox')

const projectsView = main.querySelector('.projectsView')
const projectsBtn = main.querySelector('.projectsBtn')

const listView = main.querySelector('.listView')
const listBtn = main.querySelector('.listBtn')


projectsBtn.addEventListener('click', createNewInput(projectsView, 'project'))
listBtn.addEventListener('click', createNewInput(listView, 'todo'))
inbox.addEventListener('click', renderInbox)


renderProjects();
renderInbox();

// function combineAllToDos(){
//   inboxList.list = [];
//   projects.forEach(el => {
//     el.list.forEach(item => {
//       inboxList.list.push(item);
//     })
//   })
// }

function renderInbox(){
  // combineAllToDos();
  main.dataset.list = 'allInbox'
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
  const del = document.createElement('div');
  const check = document.createElement('input');
  check.type = 'checkbox';
  check.classList.add('checkComplete');
  del.textContent = 'del'; //placeholder for icon
  del.classList.add('deleteBtn');
  p.textContent = el.name;
  span.textContent = el.dueDate;
  li.appendChild(check);
  li.appendChild(p);
  li.appendChild(span);
  li.appendChild(del)
  li.classList.add('todo')
  if(el.completed){
    li.classList.add('strike');
    check.checked = true;
  }
  del.addEventListener('click', deleteTodo(projectArray))
  check.addEventListener('click', toggleCompleted(el))
  return li;

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
        li.classList.remove('strike')
      } else {
        li.classList.add('strike')
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
  li.classList.add('project');
  li.appendChild(span);
  li.appendChild(p);
  li.appendChild(del);
  p.addEventListener('click', renderSelected)
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
      removeAllChildNodes(listView);
      renderToDos(projects[index]);
    };
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}


function createNewInput(view, type) {
  return () => {
    const newName = document.createElement('input');
    const newDate = document.createElement('input');
    newName.type = 'text';
    newDate.type = 'date';

    removeAllChildNodes(view);
    view.appendChild(newName);
    newName.select();
    
    if(type==='project'){
      renderProjects();
      newName.addEventListener('keypress', createNewItem(
        newName, projectsView, type))};
 
    if(type==='todo'){
      view.appendChild(newDate);
      renderToDos(currentProject);
      newName.addEventListener('keypress', createNewItem(
        newName, listView, type, newDate))};

  };
}

function createNewItem(newName, view, type, newDate) {
  return (e) => {
    if (e.key === 'Enter') {
      const name = newName.value;
      removeAllChildNodes(view);

      if(type==='project'){
        createNewProject(name)
        renderProjects();
      }

      if(type==='todo'){
        createNewTodo(name, newDate);
        renderToDos(currentProject);
        removeAllChildNodes(projectsView);
        renderProjects();
      }
    }
  };
}

function createNewTodo(name, newDate) {
  const todo = new ToDo(name, newDate.value);
  currentProject.list.push(todo);
}

function createNewProject(name){
  const list = new List(name);
  projects.push(list);
  return list;
}