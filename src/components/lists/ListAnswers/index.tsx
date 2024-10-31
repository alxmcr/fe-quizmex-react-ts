import { ListItemAnswer } from "../ListItemAnswer";

type Props = {
  answers: string[];
};

export function ListAnswers({ answers = [] }: Props) {
  const answerSelected = "";

  return (
    <ul className="list-answers">
      {answers.map((answer, index) => (
        <ListItemAnswer
          key={index}
          index={index}
          answer={answer}
          isChecked={answer === answerSelected}
        />
      ))}
    </ul>
  );
}
