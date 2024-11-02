import React from "react";
import "./ListItemAnswer.scss";
import { QuizContext } from "../../../providers/QuizProvider/QuizContext";
import { setAnswerSelectedAction } from "../../../store/quiz/actions/quizActions";

type Props = {
  index: number;
  answer: string;
};

export function ListItemAnswer({ index = 0, answer = "" }: Props) {
  const { dispatch } = React.useContext(QuizContext);
  const [selectedOption, setSelectedOption] = React.useState("");

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    console.log("ev.target.value", ev.target.value);
    setSelectedOption(ev.target.value);
    dispatch(setAnswerSelectedAction(ev.target.value));
  };

  return (
    <li
      className={`list-item-answer ${
        selectedOption === answer
          ? "list-item-answer--checked"
          : "list-item-answer"
      }`}
    >
      <label htmlFor={`answer-${index}`} className={`list-item-answer__label`}>
        <input
          type="radio"
          className="list-item-answer__input"
          name={answer}
          id={`answer-${index}`}
          onChange={onChange}
          value={answer}
          checked={selectedOption === answer}
        />
        <span className="list-item-answer__text">{answer}</span>
      </label>
    </li>
  );
}
