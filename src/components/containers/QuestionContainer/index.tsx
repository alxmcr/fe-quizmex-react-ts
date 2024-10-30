import { QuestionData } from "../../../types/serviceTypes";
import "./QuestionContainer.scss";

type Props = {
  question: QuestionData;
};

export function QuestionContainer(props: Props) {
  return (
    <div>
      <h1 className="question__title">{props.question.question}</h1>
    </div>
  );
}
