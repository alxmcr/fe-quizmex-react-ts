import React from "react";
import { ListItemAnswer } from "../ListItemAnswer";
import "./ListAnswers.scss";
import { QuizContext } from "../../../providers/QuizProvider/QuizContext";

type Props = {
  answers: string[];
};

export function ListAnswers({ answers = [] }: Props) {
  const { state } = React.useContext(QuizContext);

  return (
    <ul className="list-answers">
      {answers.map((answer, index) => (
        <ListItemAnswer
          key={index}
          index={index}
          answer={answer}
          isChecked={answer === state.answerSelected}
        />
      ))}
    </ul>
  );
}
