import "./BoxQuestion.scss";

type Props = {
  question: string;
};

export function BoxQuestion({ question = "" }: Props) {
  return (
    <div className="box-question">
      <h1 className="box-question__title">{question}</h1>
    </div>
  );
}
