import React from "react";
import { QuestionData } from "../../../types/service.types";
import { ListAnswers } from "../../lists/ListAnswers";
import "./FormQuestion.scss";

type Props = {
  question: QuestionData;
};

export function FormQuestion(props: Props) {
  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="form-question">
      <ListAnswers answers={props.question.options} />
    </form>
  );
}
