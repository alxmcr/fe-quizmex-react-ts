import { ScoreData } from "../../../types/app.types";
import { AppIcon110x110 } from "../../icons/AppIcon110x110";
import "./BoxResults.scss";

type Props = {
  score: ScoreData | null;
};

export function BoxResults({ score }: Props) {
  if (score === null) {
    return null;
  }

  return (
    <div
      className={`box-results ${
        score.code ? `box-results--${score.code}` : ""
      }`}
    >
      <h1 className="box-results__subtitle">Results</h1>
      <AppIcon110x110 className="box-results__icon" iconName={score.icon} />
      <p className="box-results__title">{score.text}</p>
    </div>
  );
}
