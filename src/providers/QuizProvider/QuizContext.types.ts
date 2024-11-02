import React from "react";
import { QuizState } from "../../store/quiz/reducer/quizReducer.types";
import { QuizAction } from "../../store/quiz/actions/quizActions.types";

export type QuizContextData = {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
};
