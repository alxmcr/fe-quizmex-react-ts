import React from "react";
import { useDispatch } from "react-redux";
import { setAnswerSelectedRTK } from "../../../store/quiz/features/quizSlice";
import "./ListItemAnswer.scss";

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
  const dispatch = useDispatch();

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAnswerSelectedRTK(ev.target.value));
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
          value={answer}
          checked={isChecked}
        />
        <span className="list-item-answer__text">{answer}</span>
      </label>
    </li>
  );
}
