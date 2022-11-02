import { List } from './List';
import { ToDo } from './todos/ToDo';
import { removeAllChildNodes, currentProject, projects } from '../index';
import { projectsView } from './DOMelements';
import { renderProjects, renderToDos } from './renderItems';

export function createNewItem(newName, view, type, newDate, newDesc) {
  return (e) => {
    if (e.key === 'Enter' || e.target.classList == 'confirmNew') {
      const name = newName.value;
      removeAllChildNodes(view);

      if (type === 'project') {
        createNewProject(name);
        renderProjects();
      }

      if (type === 'todo') {
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

export function createNewProject(name) {
  const list = new List(name);
  projects.push(list);
  return list;
}
