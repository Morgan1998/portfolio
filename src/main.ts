import './style.css';
import { initRouter } from './router';
import type { Routes } from './types';
import { Navbar } from './components/Navbar';
import { HomeView } from './views/Home';
import { ProjectsView } from './views/Projects';
import { WIPView } from './views/WIP';
import { ContactView } from './views/Contact';

const routes: Routes = {
  '/': HomeView,
  '/projects': ProjectsView,
  '/wip': WIPView,
  '/contact': ContactView,
};

const appContainer = document.querySelector<HTMLDivElement>('#app');

if (appContainer) {
  const header = Navbar();

  const mainContent = document.createElement('main');
  mainContent.classList.add('flex-grow');

  appContainer.append(header, mainContent);

  initRouter(routes, mainContent);
} else {
  console.error('Failed to find root #app element');
}
