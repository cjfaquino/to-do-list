import './style.css';

import { getLocalStorage } from './components/utils/localStorage';
import { renderInbox, renderProjects } from './components/renderItems';

// localStorage.clear()
getLocalStorage('projects');
getLocalStorage('notes');
renderProjects();
renderInbox();
