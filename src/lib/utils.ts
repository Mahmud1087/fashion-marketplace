import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function USD(number: number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
