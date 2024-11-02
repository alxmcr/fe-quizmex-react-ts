import React from "react";
import { QuizContextData } from "./QuizContext.types";
import { initialStateQuizContext } from "./QuizContext.constants";

export const QuizContext = React.createContext<QuizContextData>(
  initialStateQuizContext
);
