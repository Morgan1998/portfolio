import type { Routes } from './types';

let appRoutes: Routes = {};
let appContainer: HTMLElement | null = null;

const renderCurrentRoute = (): void => {
  if (!appContainer) return;

  const path = window.location.pathname;
  const viewFactory = appRoutes[path] || appRoutes['/'];

  if (viewFactory) {
    const viewNode = viewFactory();

    appContainer.replaceChildren(viewNode);
  }
};

export const navigateTo = (path: string): void => {
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path);
    renderCurrentRoute();
  }
};

export const initRouter = (routes: Routes, container: HTMLElement): void => {
  appRoutes = routes;
  appContainer = container;

  window.addEventListener('popstate', () => {
    renderCurrentRoute();
  });

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const anchor = target.closest('a');

    if (anchor) {
      const href = anchor.getAttribute('href');

      if (href && href.startsWith('/') && !href.startsWith('//')) {
        event.preventDefault();
        navigateTo(href);
      }
    }
  });

  renderCurrentRoute();
};
