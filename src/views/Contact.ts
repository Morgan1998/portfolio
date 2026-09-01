import type { ViewFactory } from '../types';

export const ContactView: ViewFactory = () => {
  const container = document.createElement('div');
  container.classList.add(
    'flex',
    'flex-col',
    'gap-10',
    'p-8',
    'max-w-4xl',
    'mx-auto',
  );

  const heading = document.createElement('h1');
  heading.classList.add('text-3xl', 'font-bold', 'text-slate-800');
  heading.textContent = 'Contact Me :)';

  const form = document.createElement('form');
  form.classList.add(
    'flex',
    'flex-col',
    'gap-4',
    'bg-white',
    'p-6',
    'rounded-lg',
    'shadow-sm',
    'border',
    'border-slate-200',
  );
  form.noValidate = true;

  const createFormGroup = (
    labelText: string,
    id: string,
    element: HTMLInputElement | HTMLTextAreaElement,
    errorMessageText: string,
  ): HTMLDivElement => {
    const group = document.createElement('div');
    group.classList.add('flex', 'flex-col', 'gap-1');

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.classList.add(
      'text-xs',
      'font-bold',
      'text-slate-500',
      'uppercase',
      'tracking-wider',
    );
    label.textContent = labelText;

    const errorMsg = document.createElement('span');
    errorMsg.classList.add('text-xs', 'text-red-500', 'hidden', 'fond-medium');
    errorMsg.textContent = errorMessageText;

    element.id = id;
    element.classList.add(
      'p-2.5',
      'border',
      'border-slate-300',
      'rounded-md',
      'text-sm',
      'outline-none',
      'focus:ring-2',
      'focus:ring-blue-500',
      'focus:border-blue-500',
      'transition-all',
    );

    let isDirty = false;

    const checkInputValidity = (event?: Event) => {
      const isValid = element.checkValidity();

      if (event?.type === 'input' && !isDirty) {
        return;
      }

      if (!isValid) {
        element.classList.add('border-red-500', 'focus:ring-red-500');
        errorMsg.classList.remove('hidden');
      } else {
        element.classList.remove('border-red-500', 'focus:ring-red-500');
        errorMsg.classList.add('hidden');
      }
    };

    const handleBlur = () => {
      isDirty = true;
      checkInputValidity();
    };

    element.addEventListener('input', checkInputValidity);
    element.addEventListener('blur', handleBlur);

    group.append(label, element, errorMsg);
    return group;
  };

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.autocomplete = 'name';
  nameInput.required = true;
  nameInput.minLength = 2;
  const nameGroup = createFormGroup(
    'Full Name',
    'name',
    nameInput,
    'Please enter a name of at least 2 characters',
  );

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.autocomplete = 'email';
  emailInput.required = true;
  const emailGroup = createFormGroup(
    'Email Address',
    'email',
    emailInput,
    'Please enter a valid email address.',
  );

  const messageInput = document.createElement('textarea');
  messageInput.rows = 5;
  messageInput.required = true;
  messageInput.minLength = 5;
  const messageGroup = createFormGroup(
    'Message',
    'message',
    messageInput,
    'Your message must be at least 5 characters long.',
  );

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.classList.add(
    'mt-2',
    'py-2.5',
    'px-4',
    'bg-blue-600',
    'text-white',
    'font-medium',
    'rounded-md',
    'text-sm',
    'hover:bg-blue-700',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'cursor-pointer',
    'transition-colors',
  );
  submitBtn.textContent = 'Send Message';

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = [nameInput, emailInput, messageInput];
    let isFormValid = true;

    inputs.forEach((input) => {
      const isValid = input.checkValidity();
      if (!isValid) {
        isFormValid = false;

        input.dispatchEvent(new Event('blur'));
      }
    });

    if (isFormValid) {
      const successCard = document.createElement('div');
      successCard.classList.add(
        'bg-green-50',
        'border',
        'border-green-200',
        'p-6',
        'rounded-lg',
        'text-center',
        'flex',
        'flex-col',
        'items-center',
        'gap-3',
      );

      const successTitle = document.createElement('h2');
      successTitle.classList.add('text-xl', 'font-bold', 'text-green-800');
      successTitle.textContent = 'Message Sent!';

      const successMessage = document.createElement('p');
      successMessage.classList.add('text-sm', 'text-green-600');
      successMessage.textContent =
        'Thank you for reaching out! I will get back to you as soon as I can :)';

      successCard.append(successTitle, successMessage);

      container.replaceChildren(heading, successCard);
    }
  });

  form.append(nameGroup, emailGroup, messageGroup, submitBtn);
  container.append(heading, form);

  return container;
};
