import type { ViewFactory } from '../types';

export const HomeView: ViewFactory = () => {
  const container = document.createElement('div');
  container.classList.add('p-8', 'max-w-4xl', 'mx-auto');

  const heading = document.createElement('h1');
  heading.classList.add('text-3xl', 'font-bold', 'text-slate-800');
  heading.textContent = 'Home View';

  const text = document.createElement('p');
  text.classList.add('text-slate-600', 'mt-4');
  text.textContent = `Yoooo I'm Morgan! This will eventually be the overview of who I am, my core values, and what I bring to the table.`;

  container.append(heading, text);
  return container;
};
