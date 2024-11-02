import React from "react";
import { initialStateQuizContext } from "../../helpers/provider.quiz.constants";
import { QuizContextData } from "../../types/provider.quiz.types";

export const QuizContext = React.createContext<QuizContextData>(
  initialStateQuizContext
);
