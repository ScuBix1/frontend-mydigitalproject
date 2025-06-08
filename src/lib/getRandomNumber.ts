import { numbers } from '@/constants/numbers';

export function getRandomNumber() {
  const entries = Object.entries(numbers);
  const randomIndex = Math.floor(Math.random() * entries.length);
  const [text, value] = entries[randomIndex];

  return { text, value };
}
