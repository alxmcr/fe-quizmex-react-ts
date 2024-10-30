import { QuestionContainer } from "../../components/containers/QuestionContainer";
import { QuestionData } from "../../types/serviceTypes";
import "./QuestionsPage.scss";

type Props = {
  questions: QuestionData[];
  currentIndexQuestion: number;
};

export function QuestionsPage({
  questions = [],
  currentIndexQuestion = -1,
}: Props) {
  if (questions.length === 0) {
    return (
      <main className="questions-page">
        <div className="questions-page__container">
          <h1 className="questions-page__no-questions">No questions</h1>
        </div>
      </main>
    );
  }

  if (currentIndexQuestion > questions.length) {
    return (
      <main className="questions-page">
        <div className="questions-page__container">
          <h1 className="questions-page__no-questions">
            Number of question is invalid
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="questions-page">
      <div className="questions-page__container">
        <h2 className="questions-page__subtitle">
          Questions {currentIndexQuestion}/12
        </h2>
        <QuestionContainer question={questions[currentIndexQuestion]} />
      </div>
    </main>
  );
}
