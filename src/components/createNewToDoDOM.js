import { changeDateFormat, removeAllChildNodes, listView, projectsView, main } from '../index';
import { renderProjects, renderInbox, renderToDos } from "./renderItems";
import { createEditInput } from "./createEditInput";

export function createNewToDoDOM(el, projectArray) {
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
  edit.addEventListener('click', editTodo(el));
  del.addEventListener('click', deleteTodo(projectArray));
  li.addEventListener('mouseenter', unhideOptions(del, edit));
  li.addEventListener('mouseleave', hideOptions(el, del, edit));
  check.addEventListener('click', toggleCompleted(el));
  p.addEventListener('click', toggleDesc);
  return li;

  function toggleDesc() {
    desc.classList.toggle('collapse');
  }

  function editTodo(el) {
    return () => {
      createEditInput(el);
    };
  }

  function hideOptions(el, del, edit) {
    return () => {
      if (!el.completed) {
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
      projectArray.delTodo(el);
      removeAllChildNodes(listView);
      removeAllChildNodes(projectsView);
      renderProjects();
      if (main.dataset.list === 'allInbox') {
        renderInbox();
      } else { renderToDos(projectArray); }
    };
  }

  function toggleCompleted(el) {
    return () => {
      el.toggleComp();
      if (!el.completed) {
        p.classList.remove('strike');
        span.classList.remove('strike');
      } else {
        p.classList.add('strike');
        span.classList.add('strike');
      }
    };
  }
}
