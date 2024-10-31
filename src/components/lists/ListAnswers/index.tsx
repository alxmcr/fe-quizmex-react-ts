type Props = {
  answers: string[];
};

export function ListAnswers({ answers = [] }: Props) {
  return (
    <ul className="list-answers">
      {answers.map((answer, index) => (
        <li key={index} className="list-answers__answer">
          {answer}
        </li>
      ))}
    </ul>
  );
}
