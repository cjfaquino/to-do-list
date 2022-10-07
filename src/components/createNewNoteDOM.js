import { listView, notesArr } from "..";
import { renderNotes } from "./renderItems";

export const addNoteBtn = document.createElement('button');
addNoteBtn.textContent = 'Add';
addNoteBtn.classList.add('newNote')

addNoteBtn.addEventListener('click', createNewNoteDOM)

function createNewNoteDOM() {
  const div = document.createElement('div');
  const textArea = document.createElement('textarea');
  const del = document.createElement('div');

  div.classList.add('noteItem');
  textArea.classList.add('noteText');
  del.classList.add('deleteNote');

  del.innerHTML = '<i class="fa-solid fa-delete-left"></i>';

  div.append(textArea, del)
  listView.append(div)

  del.addEventListener('click', deleteNote)

  addToNotesArr(div)

  function deleteNote() {
    notesArr.splice(notesArr.indexOf(div), 1)
    renderNotes();
  }
}

function addToNotesArr(el) {
  notesArr.push(el)
}