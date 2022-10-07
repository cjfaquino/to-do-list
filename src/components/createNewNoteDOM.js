import { listView } from "..";

export const addNoteBtn = document.createElement('button');
addNoteBtn.textContent = 'Add';
addNoteBtn.classList.add('newNote')

addNoteBtn.addEventListener('click', createNewNoteDOM)

function createNewNoteDOM() {
  const div = document.createElement('div');
  const textArea = document.createElement('textarea');

  div.classList.add('noteItem');
  textArea.classList.add('noteText');

  div.append(textArea)
  listView.append(div)
}