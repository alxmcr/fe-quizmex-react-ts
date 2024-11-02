import { LoadingStates } from "../../../types/app.enums";
import { QuizAction } from "../actions/quizActions.types";
import { initialStateQuizReducer } from "./quizReducer.constants";
import { QuizState } from "./quizReducer.types";

export function quizReducer(
  state = initialStateQuizReducer,
  action: QuizAction
): QuizState {
  switch (action.type) {
    case "quiz/set-questions": {
      return {
        ...state,
        quiz: {
          questions: action.payload.questions,
        },
      };
    }

    case "quiz/set-status-loading-quiz": {
      return {
        ...state,
        statusLoadingQuiz: action.payload.statusLoadingQuiz,
      };
    }

    case "quiz/set-error": {
      return {
        ...state,
        errorLoadingQuiz: action.payload.error,
      };
    }

    case "quiz/set-answer-selected": {
      return {
        ...state,
        answerSelected: action.payload.answer,
      };
    }

    case "quiz/previous-question": {
      if (state.indexCurrentQuestion - 1 > 0) {
        return {
          ...state,
          indexCurrentQuestion: state.indexCurrentQuestion - 1,
          answerSelected: "",
        };
      }
      return state;
    }

    case "quiz/next-question": {
      if (state.indexCurrentQuestion + 1 <= state.quiz.questions.length) {
        return {
          ...state,
          indexCurrentQuestion: state.indexCurrentQuestion + 1,
          answerSelected: "",
        };
      }

      return state;
    }

    case "quiz/increase-score": {
      return {
        ...state,
        score: state.score + 1,
      };
    }

    case "quiz/decrease-score": {
      return {
        ...state,
        score: state.score - 1,
      };
    }

    case "quiz/reset": {
      return {
        ...initialStateQuizReducer,
        statusLoadingQuiz: LoadingStates.SUCCESS,
        quiz: state.quiz,
      };
    }

    default: {
      return state;
    }
  }
}
