import { setLocalStorage } from '../utils/localStorage';
import { Note } from './Note';
import { getNotes } from '../../updateProjects';
import createNewNoteDOM from './createNewNoteDOM';

export const addNoteBtn = document.createElement('button');
addNoteBtn.textContent = 'Add';
addNoteBtn.classList.add('newNote');

export function createNewNote(text) {
  return () => {
    const notesArr = getNotes();
    const note = new Note(text);
    createNewNoteDOM(note);
    notesArr.push(note);
    setLocalStorage('notes', notesArr);
    return note;
  };
}

addNoteBtn.addEventListener('click', createNewNote());
