import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind CSS classnames generator with support for conditional classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
