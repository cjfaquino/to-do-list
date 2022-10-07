import { main, removeAllChildNodes, listView, currentProject, setLocalStorage } from '../index';
import { renderInbox, renderToDos } from "./renderItems";
import { setToDoName, setToDoDate, setToDoDesc } from './ToDo';


export function createEditInput(el) {
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
  accept.textContent = 'Confirm';
  cancel.textContent = 'Cancel';
  labelName.htmlFor = 'editName';
  labelDate.htmlFor = 'editDate';
  labelDesc.htmlFor = 'editDesc';
  newName.id = 'editName';
  newDate.id = 'editDate';
  newDesc.id = 'editDesc';
  accept.id = 'editAccept';
  cancel.id = 'editCancel';
  newName.type = 'text';
  newDate.type = 'date';

  newName.value = el.name;
  newDate.value = el.dueDate;
  newDesc.value = el.desc;

  div.append(labelName, newName, labelDesc, newDesc, labelDate, newDate, accept, cancel);
  edits.append(div);
  main.append(edits);

  accept.addEventListener('click', updateTodo(el));
  cancel.addEventListener('click', cancelEdit);

  function cancelEdit() {
    edits.remove();
  }

  function updateTodo(el) {
    return () => {
      const name = newName.value;
      const due = newDate.value;
      const desc = newDesc.value;
      // el.setName(name);
      // el.setDate(due);
      // el.setDesc(desc);
      setToDoName(el, name);
      setToDoDate(el, due);
      setToDoDesc(el, desc);
      
      removeAllChildNodes(edits);
      removeAllChildNodes(listView);
      if (main.dataset.list === 'allInbox') {
        renderInbox();
      } else { renderToDos(currentProject); };
      edits.remove();
    };
  }
}
