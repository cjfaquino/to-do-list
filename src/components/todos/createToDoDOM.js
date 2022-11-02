import { setLocalStorage, projects } from '../../index';
import { changeDateFormat } from '../utils/dateFunc';
import removeAllChildNodes from '../utils/removeAllChildNodes';
import { listView, projectsView, main } from '../DOMelements';
import { renderProjects, renderInbox, renderToDos } from '../renderItems';
import { createEditInput } from '../inputs/createEditInputDOM';
import { delTodo } from '../List';
import { toggleToDoCompleted } from './ToDo';

import './todoList.css';

export function createToDoDOM(el, projectArray) {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const span = document.createElement('span');
  const edit = document.createElement('div');
  const del = document.createElement('div');
  const check = document.createElement('input');
  const desc = document.createElement('div');

  check.type = 'checkbox';
  edit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
  del.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
  p.textContent = el.name;
  span.textContent = changeDateFormat(el.dueDate);
  li.dataset.date = changeDateFormat(el.dueDate);
  desc.textContent = el.desc;

  check.classList.add('checkComplete');
  li.classList.add('todo');
  p.classList.add('todoName');
  span.classList.add('todoDate');
  desc.classList.add('todoDesc');
  desc.classList.add('collapse');
  edit.classList.add('editTodo');
  edit.classList.add('hide');
  del.classList.add('hide');
  del.classList.add('delTodo');

  li.append(check, p, span, edit, del, desc);

  if (el.completed) {
    check.checked = true;
    p.classList.add('strike');
    span.classList.add('strike');
    edit.classList.remove('hide');
    del.classList.remove('hide');
  }

  function toggleDesc() {
    desc.classList.toggle('collapse');
    li.classList.toggle('selected');
  }

  function editTodo() {
    return () => {
      createEditInput(el);
    };
  }

  function hideOptions() {
    return () => {
      if (!el.completed) {
        del.classList.add('hide');
        edit.classList.add('hide');
      }
    };
  }

  function unhideOptions() {
    return () => {
      del.classList.remove('hide');
      edit.classList.remove('hide');
    };
  }

  function deleteTodo() {
    return () => {
      delTodo(projectArray, el);
      removeAllChildNodes(listView);
      removeAllChildNodes(projectsView);
      renderProjects();
      if (main.dataset.list === 'allInbox') {
        renderInbox();
      } else {
        renderToDos(projectArray);
      }
    };
  }

  function toggleCompleted() {
    return () => {
      toggleToDoCompleted(el);
      setLocalStorage('projects', projects);
      if (!el.completed) {
        p.classList.remove('strike');
        span.classList.remove('strike');
      } else {
        p.classList.add('strike');
        span.classList.add('strike');
      }
    };
  }

  edit.addEventListener('click', editTodo());
  del.addEventListener('click', deleteTodo());
  li.addEventListener('mouseenter', unhideOptions());
  li.addEventListener('mouseleave', hideOptions());
  check.addEventListener('click', toggleCompleted());
  p.addEventListener('click', toggleDesc);
  return li;
}

export default createToDoDOM;
