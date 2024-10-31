import { QuestionData } from "../../../types/service.types";
import { FormQuestion } from "../../forms/FormQuestion";
import "./QuestionContainer.scss";

type Props = {
  question: QuestionData;
};

export function QuestionContainer(props: Props) {
  return (
    <div>
      <h1 className="question__title">{props.question.question}</h1>
      <FormQuestion question={props.question} />
    </div>
  );
}
