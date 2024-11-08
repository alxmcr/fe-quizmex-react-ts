import React from "react";
import { ServiceQuizMexico } from "../services/quiz-mexico/ServiceQuizMexico";
import { LoadingStates } from "../types/app.enums";
import { QuestionData } from "../types/service.types";

export function useQuestions() {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [errorQuestions, setErrorQuestions] = React.useState<Error | null>(
    null
  );
  const [statusLoadQuestions, setStatusLoadQuestions] = React.useState(
    LoadingStates.IDLE
  );

  React.useEffect(() => {
    async function fetchQuestions() {
      try {
        setStatusLoadQuestions(LoadingStates.PENDING);
        const service = new ServiceQuizMexico();
        const list = await service.findAll();
        setQuestions(list);
        setStatusLoadQuestions(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusLoadQuestions(LoadingStates.ERROR);

        if (error instanceof Error) {
          setErrorQuestions(error);
        }
      }
    }

    fetchQuestions();
  }, []);

  return { questions, errorQuestions, statusLoadQuestions };
}
