import React from "react";
import { initialStateQuizReducer } from "../../helpers/store.quiz.constants";
import { ServiceQuizMexico } from "../../services/quiz-mexico/ServiceQuizMexico";
import {
  setErrorQuizAction,
  setQuestionsAction,
  setStatusLoadingQuizAction,
} from "../../store/quiz/actions/quizActions";
import { quizReducer } from "../../store/quiz/reducer/quizReducer";
import { LoadingStates } from "../../types/app.enums";
import { QuizContextData } from "../../types/provider.quiz.types";
import { QuizContext } from "./QuizContext";

type Props = {
  children: React.ReactNode;
};

export function QuizProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(
    quizReducer,
    initialStateQuizReducer
  );

  const value: QuizContextData = {
    state,
    dispatch,
  };

  React.useEffect(() => {
    async function fetchQuestionColors() {
      const service = new ServiceQuizMexico();

      try {
        dispatch(setStatusLoadingQuizAction(LoadingStates.PENDING));
        const questions = await service.findAll();
        dispatch(setQuestionsAction(questions));
        dispatch(setStatusLoadingQuizAction(LoadingStates.SUCCESS));
      } catch (error) {
        dispatch(setStatusLoadingQuizAction(LoadingStates.ERROR));

        if (error instanceof Error) {
          dispatch(setErrorQuizAction(error));
        }
      }
    }

    fetchQuestionColors();
  }, []);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
