import { QuestionData } from "../../../types/service.types";

type SetQuestionsAction = {
  type: "quiz/set-questions";
  payload: {
    questions: QuestionData[];
  };
};

type SetErrorQuizAction = {
  type: "quiz/set-error";
  payload: {
    error: Error;
  };
};

type SetStatusLoadingQuizAction = {
  type: "quiz/set-status-loading-quiz";
  payload: {
    statusLoadingQuiz: string;
  };
};

type SetAnswerSelectedAction = {
  type: "quiz/set-answer-selected";
  payload: {
    answer: string;
  };
};

type IncreaseScoreAction = {
  type: "quiz/increase-score";
};

type DecreaseScoreAction = {
  type: "quiz/decrease-score";
};

type PreviousQuestionAction = {
  type: "quiz/previous-question";
};

type NextQuestionAction = {
  type: "quiz/next-question";
};

type ResetQuizAction = {
  type: "quiz/reset";
};

export type QuizAction =
  | SetQuestionsAction
  | SetStatusLoadingQuizAction
  | SetErrorQuizAction
  | SetAnswerSelectedAction
  | PreviousQuestionAction
  | NextQuestionAction
  | IncreaseScoreAction
  | DecreaseScoreAction
  | ResetQuizAction;
