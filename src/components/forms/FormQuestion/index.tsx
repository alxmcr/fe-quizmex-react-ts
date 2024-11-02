import React from "react";
import { QuestionData } from "../../../types/service.types";
import { ListAnswers } from "../../lists/ListAnswers";
import "./FormQuestion.scss";
import { AppButton } from "../../buttons/AppButton";

type Props = {
  question: QuestionData;
};

export function FormQuestion(props: Props) {
  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="form-question">
      <h1 className="question-container__title">{props.question.question}</h1>
      <ListAnswers answers={props.question.options} />
      <div className="form-question__actions">
        <AppButton type="submit">Send answer</AppButton>
      </div>
    </form>
  );
}
