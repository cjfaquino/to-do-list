import './style.css';

import { List } from './components/List';
import { ToDo } from './components/ToDo';

let projects = [];


//test data
const list1 = new List('Project')
const test1 = new ToDo('test1', new Date())
const test2 = new ToDo('test2', new Date())

projects.push(list1)
list1.list.push(test1)
list1.list.push(test2)
test1.toggleComp();
