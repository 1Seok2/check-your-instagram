const world = 'Hi';

export const hello = (word: string = world): string => {
  return `Hello ${world}! `;
}