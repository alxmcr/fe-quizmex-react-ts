import { QuizData } from "./service.types";

export type QuizState = {
  quiz: QuizData;
  errorLoadingQuiz: Error | null;
  statusLoadingQuiz: string;
  indexCurrentQuestion: number;
  answerSelected: string;
  score: number;
};
