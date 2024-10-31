import { QuestionsContainer } from "../../components/containers/QuestionsContainer";
import { useQuestions } from "../../hooks/useQuestions";
import { LoadingStates } from "../../types/service.types";
import "./QuestionsPage.scss";

type Props = {
  currentIndexQuestion: number;
};

export function QuestionsPage({ currentIndexQuestion = -1 }: Props) {
  const { questions, errorQuestions, statusLoadQuestions } = useQuestions();

  if (LoadingStates.PENDING === statusLoadQuestions) {
    return (
      <main className="questions-page">
        <h1 className="questions-page__title">Loading questions...</h1>
      </main>
    );
  }

  if (LoadingStates.ERROR === statusLoadQuestions && errorQuestions) {
    return (
      <main className="questions-page">
        <h1 className="questions-page__title">{errorQuestions.message}</h1>
      </main>
    );
  }

  return (
    <main className="questions-page">
      <div className="questions-page__container">
        <h2 className="questions-page__subtitle">
          Questions {currentIndexQuestion} / {questions.length}
        </h2>
        <QuestionsContainer
          questions={questions}
          currentIndexQuestion={currentIndexQuestion}
        />
      </div>
    </main>
  );
}
