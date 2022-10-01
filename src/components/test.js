import { ToDo } from './ToDo';
import { createNewProject } from '../index';

export const test = () => {
  const project1 = createNewProject('Project');
  const project2 = createNewProject('Chores');
  
  const todo0 = new ToDo('Create delete button', '2022-09-29', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus. Amet est placerat in egestas erat.');
  project1.list.push(todo0);
  todo0.toggleComp();

  const todo = new ToDo('Create a way to update values', '2022-09-29');
  project1.list.push(todo);
  todo.toggleComp();

  const todo10 = new ToDo('Expand for description', '2022-09-30', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus. Amet est placerat in egestas erat.');
  project1.list.push(todo10);
  todo10.toggleComp();


  const todo9 = new ToDo('Create currently selected project function', '2022-10-01');
  project1.list.push(todo9);

  const todo1 = new ToDo('Sort dates', '2022-10-01');
  project1.list.push(todo1);

  const todo8 = new ToDo('Change date format', '2022-10-01');
  project1.list.push(todo8);

  const todo2 = new ToDo('Filter by today', '2022-10-01');
  project1.list.push(todo2);

  const todo3 = new ToDo('Filter by this week', '2022-10-01');
  project1.list.push(todo3);

  const todo7 = new ToDo('Add notes section', '2022-10-01');
  project1.list.push(todo7);

  const todo4 = new ToDo('Clean room', new Date().toISOString().split('T')[0]);
  project2.list.push(todo4);

  const todo5 = new ToDo('Do laundry', new Date().toISOString().split('T')[0]);
  project2.list.push(todo5);
  todo5.toggleComp();

  const todo6 = new ToDo('Buy groceries', new Date().toISOString().split('T')[0]);
  project2.list.push(todo6);

  const todo11 = new ToDo('Take out the trash', new Date().toISOString().split('T')[0]);
  project2.list.push(todo11);
  todo11.toggleComp();
};
