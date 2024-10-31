import { QuestionData } from "../../../types/service.types";
import { QuestionContainer } from "../QuestionContainer";
import "./QuestionsContainer.scss";

type Props = {
  questions: QuestionData[];
  currentIndexQuestion: number;
};

export function QuestionsContainer({
  questions = [],
  currentIndexQuestion = -1,
}: Props) {
  if (questions.length === 0) {
    return (
      <div className="questions-page">
        <div className="questions-page__container">
          <h1 className="questions-page__no-questions">No questions</h1>
        </div>
      </div>
    );
  }

  if (currentIndexQuestion > questions.length) {
    return (
      <div className="questions-page">
        <div className="questions-page__container">
          <h1 className="questions-page__no-questions">
            Number of question is invalid
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="questions-page">
      <div className="questions-page__container">
        <h2 className="questions-page__subtitle">
          Questions {currentIndexQuestion}/12
        </h2>
        <QuestionContainer question={questions[currentIndexQuestion]} />
      </div>
    </div>
  );
}
