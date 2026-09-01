export const Navbar = (): HTMLElement => {
  const header = document.createElement('header');
  header.classList.add(
    'bg-white',
    'border-b',
    'border-slate-200',
    'sticky',
    'top-0',
    'z-50',
  );

  const nav = document.createElement('nav');
  nav.classList.add(
    'max-w-4xl',
    'mx-auto',
    'px-8',
    'py-4',
    'flex',
    'justify-between',
    'items-center',
  );

  const logo = document.createElement('a');
  logo.setAttribute('href', '/');
  logo.classList.add(
    'text-lg',
    'font-bold',
    'text-slate-800',
    'hover:text-blue-600',
  );
  logo.textContent = 'Morgan.dev';

  const linksContainer = document.createElement('div');
  linksContainer.classList.add('flex', 'gap-6');

  const createNavLink = (label: string, path: string): HTMLAnchorElement => {
    const link = document.createElement('a');
    link.setAttribute('href', path);
    link.classList.add(
      'text-sm',
      'font-medium',
      'text-slate-600',
      'hover:text-blue-600',
      'transition-colors',
    );
    link.textContent = label;
    return link;
  };

  const projectsLink = createNavLink('Projects', '/projects');
  const wipLink = createNavLink('WIP', '/wip');
  const contactLink = createNavLink('Contact', '/contact');

  linksContainer.append(projectsLink, wipLink, contactLink);
  nav.append(logo, linksContainer);
  header.append(nav);

  return header;
};
