import './style.css';

import { List } from './components/List';
import { ToDo } from './components/ToDo';


let projects = [];
let currentProject;


//test data
const test1 = new ToDo('test1', new Date())
const test2 = new ToDo('test2', new Date())


const project1 = createNewProject('Project');
const project2 = createNewProject('Cleaning');


project1.list.push(test1)
project2.list.push(test2)
test1.toggleComp();

const main = document.querySelector('main')
const projectsView = main.querySelector('.projectsView')
const projectsBtn = main.querySelector('.projectsBtn')

const listView = main.querySelector('.listView')
const listBtn = main.querySelector('.listBtn')


projectsBtn.addEventListener('click', createNewInput(projectsView, 'project'))
listBtn.addEventListener('click', createNewInput(listView, 'todo'))

renderProjects();
renderToDos(project1);

function renderToDos(projectArray) {
  projectArray.list.forEach(el => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const span = document.createElement('span');
    p.textContent = el.name;
    span.textContent = el.dueDate;
    li.appendChild(p);
    li.appendChild(span);
    listView.appendChild(li);
    currentProject = projectArray;
  });
}

function renderProjects() {
  projects.forEach((el, index) => {
    const li = createNewProjectDOM(el, index);
    projectsView.appendChild(li);
  });
}

function createNewProjectDOM(item, index) {
  const li = document.createElement('li');
  li.textContent = item.name;
  li.classList.add('project');
  li.addEventListener('click', renderSelected)
  return li;

  function renderSelected() {
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
    const newInput = document.createElement('input');

    removeAllChildNodes(view);
    view.appendChild(newInput);

    if(type==='project'){
      renderProjects();
      newInput.addEventListener('keypress', createNewItem(
        newInput, projectsView, type))};

    if(type==='todo'){
      renderToDos(currentProject);
      newInput.addEventListener('keypress', createNewItem(
        newInput, listView, type))};

  };
}

function createNewItem(newInput, view, type) {
  return (e) => {
    if (e.key === 'Enter') {
      const name = newInput.value;
      removeAllChildNodes(view);

      if(type==='project'){
        createNewProject(name)
        renderProjects();

        console.log(projects);
      }

      if(type==='todo'){
        const todo = new ToDo(name, new Date());
        currentProject.list.push(todo);
        renderToDos(currentProject);
        
        console.log(todo);
      }
    }
  };
}

function createNewProject(name){
  const list = new List(name);
  projects.push(list);
  return list;
}