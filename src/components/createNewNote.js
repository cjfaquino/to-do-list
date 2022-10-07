import { notesArr, setLocalStorage } from "..";
import { createNewNoteDOM } from "./createNewNoteDOM";
import { Note } from "./Note";

export const addNoteBtn = document.createElement('button');
addNoteBtn.textContent = 'Add';
addNoteBtn.classList.add('newNote')

addNoteBtn.addEventListener('click', createNewNote)

export function createNewNote(text) {
  const note = new Note(text)
  createNewNoteDOM(note);
  notesArr.push(note)
  setLocalStorage('notes', notesArr)
  return note;
}