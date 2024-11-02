import { QuizAction } from "./store.quiz.types.actions";
import { QuizState } from "./store.quiz.types.reducer";

export type QuizContextData = {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
};
