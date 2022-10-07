export class ToDo {
  constructor(name, dueDate, desc = 'No description') {
    this.name = name;
    this.dueDate = dueDate;
    this.desc = desc;
    this.completed = false;
  }
}

export function setToDoName(todo, name) {
  todo.name = name
}

export function setToDoDate(todo, date) {
  todo.dueDate = date
}

export function setToDoDesc(todo, desc) {
  todo.desc = desc
}

export function toggleToDoCompleted(todo) {
  todo.completed = !todo.completed
}