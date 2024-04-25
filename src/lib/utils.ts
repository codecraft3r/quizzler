import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export type quiz = {
  title: string
  questions: {
    question: string
    options: string[]
    answer: string
  }[]
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseQuizJSON(quizJSON: string) {
  try {
    return JSON.parse(quizJSON) as quiz
  } catch (e) {
    return null
  }
}