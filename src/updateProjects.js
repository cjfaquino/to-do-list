let notesArr = [];
let projects = [];
let currentProject;

export const getProjects = () => projects;

export function updateProjects(item) {
  projects = item;
}

export const getCurrentProject = () => currentProject;

export function updateCurrentProject(item) {
  currentProject = item;
}

export const getNotes = () => notesArr;
export function updateNotes(item) {
  notesArr = item;
}
