import { QuizData } from "../../../types/service.types";

export type QuizState = {
  quiz: QuizData;
  errorLoadingQuiz: Error | null;
  statusLoadingQuiz: string;
  indexCurrentQuestion: number;
  answerSelected: string;
  score: number;
};
