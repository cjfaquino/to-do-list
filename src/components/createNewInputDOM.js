import { removeAllChildNodes, projectsView, currentProject, listView } from '../index';
import { renderProjects, renderToDos } from "./renderItems";
import { createNewItem } from './createNewItem';

export function createNewInput(view, type) {
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

    newName.placeholder = `add a ${type}...`;
    newDesc.placeholder = 'add a breif description';

    newName.type = 'text';
    newDate.type = 'date';

    confirm.textContent = 'Confirm';
    cancel.textContent = 'Cancel';

    removeAllChildNodes(view);
    div.append(newName);


    if (type === 'project') {
      div.append(confirm, cancel);
      renderProjects();
      newName.addEventListener('keypress', createNewItem(
        newName, projectsView, type));
      confirm.addEventListener('click', createNewItem(
        newName, projectsView, type));
    };

    if (type === 'todo') {
      bottomRow.append(newDate, confirm, cancel);
      div.append(newDesc, bottomRow);
      renderToDos(currentProject);
      newName.addEventListener('keypress', createNewItem(
        newName, listView, type, newDate, newDesc));
      confirm.addEventListener('click', createNewItem(
        newName, listView, type, newDate, newDesc));
    };

    cancel.addEventListener('click', () => div.remove());
    view.append(div);
    newName.select();
  };
}
