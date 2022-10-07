export class ToDo {
  constructor(name, dueDate, desc = 'No description') {
    this.name = name;
    this.dueDate = dueDate;
    this.desc = desc;
    this.completed = false;
  }

  // setName(value) {
  //   this.name = value;
  // }

  // setDate(value) {
  //   this.dueDate = value;
  // }

  // setDesc(value) {
  //   this.desc = value;
  // }

  // toggleComp() {
  //   this.completed = !this.completed;
  // }
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