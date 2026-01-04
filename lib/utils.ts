import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const debounce  = (func: (...params: string[]) => void, delay = 500) =>  {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: string[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay)
  }
}
