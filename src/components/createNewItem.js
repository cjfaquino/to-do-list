import { List } from './List';
import { ToDo } from './todos/ToDo';
import { getCurrentProject, getProjects } from '../updateProjects';
import { projectsView } from './DOMelements';
import { renderProjects, renderToDos } from './renderItems';
import removeAllChildNodes from './utils/removeAllChildNodes';

function createNewTodo(name, newDate, desc) {
  const currentProject = getCurrentProject();
  let newDesc = desc;
  if (!desc) {
    newDesc = undefined;
  }
  const todo = new ToDo(name, newDate, newDesc);
  currentProject.list.push(todo);
}

export function createNewProject(name) {
  const projects = getProjects();
  const list = new List(name);
  projects.push(list);
  return list;
}

export function createNewItem(view, type) {
  return (e) => {
    if (e.key === 'Enter' || e.target.classList.contains('confirmNew')) {
      const newName = document.querySelector('.newName').value;

      if (type === 'project') {
        createNewProject(newName);
        removeAllChildNodes(view);
        renderProjects();
      }

      if (type === 'todo') {
        const currentProject = getCurrentProject();
        const newDesc = document.querySelector('.newDesc').value;
        const newDate = document.querySelector('.newDate').value;

        createNewTodo(newName, newDate, newDesc);
        removeAllChildNodes(view);
        removeAllChildNodes(projectsView);
        renderToDos(currentProject);
        renderProjects();
      }
    }
  };
}
