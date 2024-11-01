import "./BoxScore.scss";

type Props = {
  title: string;
  score: number;
  maxScore: number;
};

export function BoxScore({ title = "", score = 0, maxScore = 0 }: Props) {
  return (
    <div className="box-score">
      <h2 className="box-score__title">{title}</h2>
      <p className="box-score__score">
        {score} / {maxScore}
      </p>
    </div>
  );
}
