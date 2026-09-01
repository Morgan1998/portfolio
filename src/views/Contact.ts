import type { ViewFactory } from '../types';

export const ContactView: ViewFactory = () => {
  const container = document.createElement('div');
  container.classList.add('p-8', 'max-w-4xl', 'mx-auto');

  const heading = document.createElement('h1');
  heading.classList.add('text-3xl', 'font-bold', 'text-slate-800');
  heading.textContent = 'Contact Me :)';

  const text = document.createElement('p');
  text.classList.add('text-slate-600', 'mt-4');
  text.textContent = `Morgan, put the contact form here when you're ready to make it`;

  container.append(heading, text);
  return container;
};
