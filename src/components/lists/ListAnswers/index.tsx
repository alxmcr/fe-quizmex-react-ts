import { ListItemAnswer } from "../ListItemAnswer";
import "./ListAnswers.scss";

type Props = {
  answers: string[];
};

export function ListAnswers({ answers = [] }: Props) {
  return (
    <ul className="list-answers">
      {answers.map((answer, index) => (
        <ListItemAnswer key={index} index={index} answer={answer} />
      ))}
    </ul>
  );
}
