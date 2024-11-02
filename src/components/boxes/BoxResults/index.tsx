import { ScoreData } from "../../../types/app.types";
import { Icon110x110Star } from "../../icons/110x110/Icon110x110Star";
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
      <Icon110x110Star className="box-results__icon" />
      <p className="box-results__title">{score.text}</p>
    </div>
  );
}
