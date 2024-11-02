import React from "react";
import "./ListItemAnswer.scss";
import { QuizContext } from "../../../providers/QuizProvider/QuizContext";
import { setAnswerSelectedAction } from "../../../store/quiz/actions/quizActions";

type Props = {
  index: number;
  answer: string;
  isChecked: boolean;
};

export function ListItemAnswer({
  index = 0,
  answer = "",
  isChecked = false,
}: Props) {
  const { dispatch } = React.useContext(QuizContext);
  const [selectedOption, setSelectedOption] = React.useState("");

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(ev.target.value);
    dispatch(setAnswerSelectedAction(ev.target.value));
  };

  return (
    <li
      className={`list-item-answer ${
        isChecked ? "list-item-answer--checked" : "list-item-answer"
      }`}
    >
      <label htmlFor={`answer-${index}`} className={`list-item-answer__label`}>
        <input
          type="radio"
          className="list-item-answer__input"
          name={answer}
          id={`answer-${index}`}
          onChange={onChange}
          value={selectedOption}
          checked={isChecked}
        />
        <span className="list-item-answer__text">{answer}</span>
      </label>
    </li>
  );
}
