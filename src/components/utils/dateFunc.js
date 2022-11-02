import { sortDateBtn, listView } from '../DOMelements';
import removeAllChildNodes from './removeAllChildNodes';
// import { renderToDos } from '../renderItems';
// import { projects, currentProject } from '../../index';

export function changeDateFormat(dateISOstring) {
  if (!dateISOstring) return '';
  const split = dateISOstring.split('-');
  const newDate = `${split[1]}/${split[2]}/${split[0]}`;
  return newDate;
}

export function resetSortBtn() {
  sortDateBtn.removeAttribute('data-sort');
  sortDateBtn.innerHTML = `<i class="fa-solid fa-sort">`;
}

export function sortDate() {
  if (!sortDateBtn.dataset.sort) {
    sortDateBtn.dataset.sort = 'asc';
  }
  const todos = document.querySelectorAll('li.todo');
  const todosArr = Array.from(todos);
  const sorted = todosArr.sort((a, b) => {
    if (sortDateBtn.dataset.sort === 'asc') {
      if (a.dataset.date > b.dataset.date) {
        return 1;
      }
      if (a.dataset.date < b.dataset.date) {
        return -1;
      }
    } else if (sortDateBtn.dataset.sort === 'dsc') {
      if (a.dataset.date > b.dataset.date) {
        return -1;
      }
      if (a.dataset.date < b.dataset.date) {
        return 1;
      }
    }
    return 0;
  });
  if (sortDateBtn.dataset.sort === 'asc') {
    sortDateBtn.dataset.sort = 'dsc';
    sortDateBtn.innerHTML = '<i class="fa-solid fa-sort-up"></i>';
  } else if (sortDateBtn.dataset.sort === 'dsc') {
    sortDateBtn.dataset.sort = 'asc';
    sortDateBtn.innerHTML = '<i class="fa-solid fa-sort-down"></i>';
  }
  removeAllChildNodes(listView);
  sorted.forEach((el) => listView.append(el));
}
