import './style.css';

import { List } from './components/List';
import { ToDo } from './components/ToDo';

let projects = [];


//test data
const list1 = new List('Project')
const test1 = new ToDo('test1', new Date())
const test2 = new ToDo('test2', new Date())

projects.push(list1)
list1.list.push(test1)
list1.list.push(test2)
test1.toggleComp();

const main = document.querySelector('main')
const projectsView = main.querySelector('.projectsView')
const projectsBtn = main.querySelector('.projectsBtn')

const listView = main.querySelector('.listView')

renderProjects();
renderToDos(list1);

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
  });
}

function renderProjects() {
  projects.forEach((el) => {
    const li = document.createElement('li');
    li.textContent = el.name;
    li.classList.add('project');
    projectsView.appendChild(li);
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

projectsBtn.addEventListener('click', newItem())

function newItem() {
  return () => {
    const listInput = document.createElement('input');

    removeAllChildNodes(projectsView);
    renderProjects();
    projectsView.appendChild(listInput);
    listInput.addEventListener('keypress', newProject(listInput));

  };
}

function newProject(listInput) {
  return (e) => {
    if (e.key === 'Enter') {
      const listName = listInput.value;
      const list = new List(listName);
      projects.push(list);
      removeAllChildNodes(projectsView);
      renderProjects();
      console.log(projects);
    }
  };
}
