import React from "react";
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
  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    console.log(ev.target.value);
  };

  return (
    <li className="list-item-answer">
      <label htmlFor={`answer-${index}`} className="list-item-answer__label">
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
