import { sortDateBtn, listView } from '../DOMelements';
import removeAllChildNodes from './removeAllChildNodes';
// import { renderToDos } from '../renderItems';
// import { projects, currentProject } from '../../index';

export function changeDateFormat(dateISOstring) {
  // get from date input
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
    const aDate = new Date(a.dataset.date).getTime();
    const bDate = new Date(b.dataset.date).getTime();
    if (sortDateBtn.dataset.sort === 'asc') {
      return aDate - bDate;
    }
    if (sortDateBtn.dataset.sort === 'dsc') {
      return bDate - aDate;
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

export const filterDate = (value) => {
  const todos = document.querySelectorAll('li.todo');
  const todosArr = Array.from(todos);

  const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
  const getToday = new Date();
  const today = getToday.toLocaleDateString('en-US', options);
  const week = getToday.setDate(getToday.getDate() + 7);

  const filtered = todosArr.filter((todo) => {
    if (value === 'today') {
      return today === todo.dataset.date;
    }
    if (value === 'week') {
      const todoDateValue = new Date(todo.dataset.date).getTime();
      const todayValue = new Date(today).getTime();
      return week > todoDateValue && todoDateValue >= todayValue;
    }
    return undefined;
  });

  removeAllChildNodes(listView);
  filtered.forEach((el) => listView.append(el));
};
