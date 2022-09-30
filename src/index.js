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
  const edit = document.createElement('div');
  const del = document.createElement('div');
  const check = document.createElement('input');
  check.type = 'checkbox';
  check.classList.add('checkComplete');
  edit.textContent = 'edit'; //placeholder for icon
  edit.classList.add('editBtn');
  del.textContent = 'del'; //placeholder for icon
  del.classList.add('deleteBtn');
  p.textContent = el.name;
  span.textContent = el.dueDate;
  li.appendChild(check);
  li.appendChild(p);
  li.appendChild(span);
  li.appendChild(edit)
  li.appendChild(del)
  li.classList.add('todo');
  edit.classList.add('hide');
  del.classList.add('hide');
  if(el.completed){
    li.classList.add('strike');
    check.checked = true;
    edit.classList.remove('hide')
    del.classList.remove('hide')
  }
  edit.addEventListener('click', editTodo(el))
  del.addEventListener('click', deleteTodo(projectArray));
  li.addEventListener('mouseenter', unhideOptions(del, edit))
  li.addEventListener('mouseleave', hideOptions(el, del, edit))
  check.addEventListener('click', toggleCompleted(el))
  return li;

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
  li.classList.add('projectItem');
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