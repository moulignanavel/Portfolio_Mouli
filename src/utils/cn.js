import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple CSS class names and resolves Tailwind CSS conflicts cleanly.
 * @param {...(string | undefined | null | boolean | Record<string, boolean>)} inputs
 * @returns {string} Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
