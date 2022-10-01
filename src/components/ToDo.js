export class ToDo {
  constructor(name, dueDate, desc = 'No description') {
    this.name = name;
    this.dueDate = dueDate;
    this.desc = desc;
    this.completed = false;
  }

  setName(value) {
    this.name = value;
  }

  setDate(value) {
    this.dueDate = value;
  }

  setDesc(value) {
    this.desc = value;
  }

  toggleComp() {
    this.completed = !this.completed;
  }
}
