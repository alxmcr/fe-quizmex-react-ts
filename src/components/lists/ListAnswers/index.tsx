import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ListItemAnswer } from "../ListItemAnswer";
import "./ListAnswers.scss";

type Props = {
  answers: string[];
};

export function ListAnswers({ answers = [] }: Props) {
  const state = useSelector((state: RootState) => state.quiz);

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
