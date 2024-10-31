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
      <div className="questions-container">
        <h1 className="questions-page__no-questions">No questions</h1>
      </div>
    );
  }

  if (currentIndexQuestion < 0) {
    return (
      <div className="questions-container">
        <h1 className="questions-page__no-questions">
          Number of question is invalid
        </h1>
      </div>
    );
  }

  return (
    <div className="questions-container">
      <QuestionContainer question={questions[currentIndexQuestion]} />
    </div>
  );
}
