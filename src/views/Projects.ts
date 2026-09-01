import type { ViewFactory } from '../types';

export const ProjectsView: ViewFactory = () => {
  const container = document.createElement('div');
  container.classList.add('p-8', 'max-w-4xl', 'mx-auto');

  const heading = document.createElement('h1');
  heading.classList.add('text-3xl', 'font-bold', 'text-slate-800');
  heading.textContent = 'Completed Projects';

  const text = document.createElement('p');
  text.classList.add('text-slate-600', 'mt-4');
  text.textContent =
    'This section will highlight my completed projects, complete with links and descriptions.';

  container.append(heading, text);
  return container;
};
