export class ToDo {
  constructor(name, dueDate, desc = '') {
    this.name = name;
    if(!dueDate){
      this.dueDate = new Date().toISOString().split('T')[0]
    } else {this.dueDate = dueDate;}
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
