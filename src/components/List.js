export class List {
  constructor(name) {
    this.name = name;
  }

  list = [];
}

export function delTodo(project, todo) {
  project.list.splice(project.list.indexOf(todo), 1);
}
