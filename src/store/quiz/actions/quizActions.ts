import { LoadingStates } from "../../../types/app.enums";
import { QuestionData } from "../../../types/service.types";
import { QuizAction } from "./quizActions.types";

export function setQuestionsAction(questions: QuestionData[] = []): QuizAction {
  return {
    type: "quiz/set-questions",
    payload: {
      questions,
    },
  };
}

export function setStatusLoadingQuizAction(
  statusLoadingQuiz = LoadingStates.IDLE
): QuizAction {
  return {
    type: "quiz/set-status-loading-quiz",
    payload: {
      statusLoadingQuiz,
    },
  };
}

export function setErrorQuizAction(error: Error): QuizAction {
  return {
    type: "quiz/set-error",
    payload: {
      error,
    },
  };
}

export function setAnswerSelectedAction(answer = ""): QuizAction {
  return {
    type: "quiz/set-answer-selected",
    payload: {
      answer,
    },
  };
}

export function movePreviousQuestionAction(): QuizAction {
  return {
    type: "quiz/previous-question",
  };
}

export function moveNextQuestionAction(): QuizAction {
  return {
    type: "quiz/next-question",
  };
}

export function increaseScoreQuizAction(): QuizAction {
  return {
    type: "quiz/increase-score",
  };
}

export function decreaseScoreQuizAction(): QuizAction {
  return {
    type: "quiz/decrease-score",
  };
}

export function resetQuizAction(): QuizAction {
  return {
    type: "quiz/reset",
  };
}
