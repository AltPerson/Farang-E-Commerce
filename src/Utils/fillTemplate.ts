import { KeyboardEvent } from 'react';

let template = '+38_(__)___-__-__';

export function fillTemplate(e: KeyboardEvent<HTMLInputElement>): void {
  const inputElement = e.currentTarget;
  const keyInput = e.key;
  inputElement.value = inputElement.value.replace(/[^+,^\d,^(|)^-]/g, '');
  if (parseInt(keyInput) || keyInput === '0') {
    template = template.replace('_', keyInput);
    inputElement.value = template;
  } else if (keyInput === 'Backspace') {
    if (template[3] === '_') {
      return;
    }
    template = template
      .split('')
      .reverse()
      .join('')
      .replace(/\d/, '_')
      .split('')
      .reverse()
      .join('');
    inputElement.value = template;
  }
}
