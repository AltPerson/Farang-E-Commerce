export function checkFile(input: HTMLInputElement): boolean {
  const name = input.files[0].name.split('').reverse();
  const returnArr: string[] = [''];
  for (const char of name) {
    if (char !== '.') {
      returnArr.push(char);
    } else {
      break;
    }
  }
  const extension = returnArr.reverse().join('');

  if (extension === 'jpg' || extension === 'png' || extension === 'webp') {
    return false;
  } else {
    return true;
  }
}
