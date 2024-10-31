import { QuestionData } from "../../../types/service.types";
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
    <div className="questions-container">
      {/* <QuestionContainer question={questions[currentIndexQuestion]} /> */}
    </div>
  );
}
