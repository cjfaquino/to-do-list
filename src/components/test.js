import { LoremIpsum } from 'lorem-ipsum';
import { ToDo, toggleToDoCompleted } from './todos/ToDo';
import { createNewProject } from './createNewItem';
import { Note } from './notes/Note';
import { getNotes } from '../updateProjects';

const randomDate = () => {
  const randomNum = Math.floor(Math.random() * 15);
  const getToday = new Date();
  const date = new Date(getToday.setDate(getToday.getDate() + randomNum));
  return date.toISOString().split('T')[0];
};

const randomDesc = () => {
  const randomNum = Math.floor(Math.random() * 45 + 15);
  return new LoremIpsum().generateWords(randomNum);
};

const projectData = [
  ['Create delete button', '2022-09-29'],
  ['Create a way to update values', '2022-09-29'],
  ['Expand for description', '2022-09-30'],
  ['Create currently selected project function', '2022-10-01'],
  ['Sort dates', '2022-11-01'],
  ['Change date format', '2022-10-01'],
  ['Filter by today', '2022-11-02'],
  ['Filter by week', '2022-11-02'],
  ['Add notes section', '2022-10-01'],
  ['Add localStorage abilities', '2022-10-06'],
];
const choresData = [
  ['Do laundry'],
  ['Wash dishes'],
  ['Take out trash'],
  ['Prep meals'],
  ['Bathe the pets'],
  ['Vacuum curtains'],
  ['Empty dishwasher'],
  ['Cean litter box'],
  ['Wash windows'],
  ['Vacuum rugs'],
  ['Sweep floors'],
  ['Mop floors'],
  ['Clean PC'],
  ['Weed garden'],
  ['Clean bathroom'],
];
const notesData = [
  'oranges\nbananas\napples\ngrapes',
  'CPU\nGPU\nRAM\nPSU\nSSD\nMotherboard',
  'one\ntwo\nthree\nfour',
];

export const todos = () => {
  const project1 = createNewProject('Project');
  const project2 = createNewProject('Chores');

  projectData.forEach((item) => {
    const todo = new ToDo(item[0], item[1], randomDesc());
    project1.list.push(todo);
    toggleToDoCompleted(todo);
  });

  choresData.forEach((item) => {
    const todo = new ToDo(item[0], randomDate(), randomDesc());
    project2.list.push(todo);
  });
};

export const notes = () => {
  const notesArr = getNotes();

  for (let i = 0; i < 8; i++) {
    const newNotes = new Note(notesData[i]);
    notesArr.push(newNotes);
  }
};
