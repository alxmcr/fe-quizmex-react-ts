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

  if (
    currentIndexQuestion - 1 < 0 ||
    currentIndexQuestion - 1 >= questions.length
  ) {
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
      <h2 className="questions-container__subtitle">
        Questions {currentIndexQuestion} / {questions.length}
      </h2>
      <QuestionContainer question={questions[currentIndexQuestion - 1]} />
    </div>
  );
}
