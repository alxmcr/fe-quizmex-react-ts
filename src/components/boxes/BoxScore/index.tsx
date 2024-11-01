import "./BoxScore.scss";

type Props = {
  title: string;
  score: number;
  maxScore: number;
  variant?: string;
};

export function BoxScore({
  title = "",
  score = 0,
  maxScore = 0,
  variant = "",
}: Props) {
  return (
    <div className={`box-score ${variant ? `box-score--${variant}` : ""}`}>
      <h2 className="box-score__title">{title}</h2>
      <p className="box-score__score">
        {score} / {maxScore}
      </p>
    </div>
  );
}
