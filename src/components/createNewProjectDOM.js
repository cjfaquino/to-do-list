import { projects, updateCurrentProject, updateProjects } from '../index';
import { renderProjects, renderInbox, renderToDos } from './renderItems';
import removeAllChildNodes from './utils/removeAllChildNodes';
import colorSelected from './utils/colorSelected';
import {
  projectsView,
  main,
  listTitle,
  listBtn,
  dateLabel,
  sortDateBtn,
  listView,
} from './DOMelements';

export function createNewProjectDOM(item, index) {
  function deleteProject() {
    return () => {
      const filtered = projects.filter((key) => key !== item);
      updateProjects(filtered);
      removeAllChildNodes(projectsView);
      renderProjects();
      renderInbox();
    };
  }

  function renderSelected() {
    main.dataset.list = item.name;
    updateCurrentProject(item);
    listTitle.textContent = item.name;
    listTitle.after(listBtn);
    dateLabel.append(sortDateBtn);
    removeAllChildNodes(listView);
    renderToDos(projects[index]);
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  const p = document.createElement('p');
  const del = document.createElement('div');

  del.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
  span.textContent = item.list.length;
  p.textContent = item.name;

  p.classList.add('projectName');
  del.classList.add('delProject');
  span.classList.add('projectLength');
  li.classList.add('projectItem');
  li.classList.add('selectable');
  del.classList.add('hide');

  li.append(span, p, del);

  p.addEventListener('click', renderSelected);
  span.addEventListener('click', renderSelected);
  del.addEventListener('click', deleteProject(item));
  li.addEventListener('click', colorSelected);
  li.addEventListener('mouseenter', () => {
    del.classList.remove('hide');
  });
  li.addEventListener('mouseleave', () => {
    del.classList.add('hide');
  });
  return li;
}

export default createNewProjectDOM;
