export class Note {
  constructor(text = ' ') {
    this.text = text;
  }
}

export function setNoteText(note, text) {
  note.text = text
}