export class List {
  constructor(name) {
    this.name = name;
  }
  list = [];

  // delTodo(item) {
  //   this.list.splice(this.list.indexOf(item), 1);
  // }
}

export function delTodo(project, todo) {
  project.list.splice(project.list.indexOf(todo), 1)
}