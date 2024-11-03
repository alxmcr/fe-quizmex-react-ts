import { LoadingStates } from "../types/app.enums";
import { QuizData } from "../types/service.types";
import { QuizState } from "../types/store.quiz.types.slice";

const initialQuiz: QuizData = {
  questions: [],
};

export const initialStateQuizSlice: QuizState = {
  quiz: initialQuiz,
  statusLoadingQuiz: LoadingStates.IDLE,
  errorLoadingQuiz: null,
  indexCurrentQuestion: 1,
  answerSelected: "",
  score: 0,
};
