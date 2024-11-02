import { initialStateQuizReducer } from "../../store/quiz/reducer/quizReducer.constants";
import { QuizContextData } from "./QuizContext.types";

export const initialStateQuizContext: QuizContextData = {
  state: initialStateQuizReducer,
  dispatch: () => {},
};
