import { QuizContextData } from "../types/provider.quiz.types";
import { initialStateQuizReducer } from "./store.quiz.constants";

export const initialStateQuizContext: QuizContextData = {
  state: initialStateQuizReducer,
  dispatch: () => {},
};
