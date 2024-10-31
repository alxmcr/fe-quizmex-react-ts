import React from "react";

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
    <li>
      <label htmlFor={`answer-${index}`}>
        <input
          type="radio"
          name={answer}
          id={`answer-${index}`}
          onChange={onChange}
          value={answer}
          checked={isChecked}
        />
        <span>{answer}</span>
      </label>
    </li>
  );
}
