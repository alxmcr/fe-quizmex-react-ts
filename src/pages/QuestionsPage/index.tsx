import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionsContainer } from "../../components/containers/QuestionsContainer";
import { AppDispatch, RootState } from "../../store";
import { fetchQuiz } from "../../store/quiz/features/quizSlice.thunk";
import { LoadingStates } from "../../types/app.enums";
import "./QuestionsPage.scss";

export function QuestionsPage() {
  const state = useSelector((state: RootState) => state.quiz);
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  if (LoadingStates.PENDING === state.statusLoadingQuiz) {
    return (
      <main className="questions-page">
        <h1 className="questions-page__title">Loading questions...</h1>
      </main>
    );
  }

  if (
    LoadingStates.ERROR === state.statusLoadingQuiz &&
    state.errorLoadingQuiz
  ) {
    return (
      <main className="questions-page">
        <h1 className="questions-page__title">
          {state.errorLoadingQuiz.message}
        </h1>
      </main>
    );
  }

  return (
    <main className="questions-page">
      <div className="questions-page__container">
        <QuestionsContainer
          questions={state.quiz.questions}
          currentIndexQuestion={state.indexCurrentQuestion}
        />
      </div>
    </main>
  );
}
