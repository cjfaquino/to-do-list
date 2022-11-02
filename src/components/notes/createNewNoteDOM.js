import { setLocalStorage } from '../utils/localStorage';
import { listView } from '../DOMelements';
import { renderNotes } from '../renderItems';
import { setNoteText } from './Note';
import { getNotes } from '../../updateProjects';

import './notes.css';

function createNewNoteDOM(item) {
  const notesArr = getNotes();
  const div = document.createElement('div');
  const textArea = document.createElement('textarea');
  const del = document.createElement('div');

  div.classList.add('noteItem');
  textArea.classList.add('noteText');
  del.classList.add('deleteNote');

  textArea.placeholder = 'add brief note...';
  del.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
  textArea.value = item.text;

  div.append(textArea, del);
  listView.append(div);

  function updateNote() {
    setNoteText(item, this.value);
    setLocalStorage('notes', notesArr);
  }

  function deleteNote() {
    notesArr.splice(notesArr.indexOf(item), 1);
    setLocalStorage('notes', notesArr);
    renderNotes();
  }

  del.addEventListener('click', deleteNote);
  textArea.addEventListener('change', updateNote);
}

export default createNewNoteDOM;
