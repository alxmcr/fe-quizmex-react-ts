import { Icon110x110Star } from "../../icons/110x110/Icon110x110Star";
import "./BoxResults.scss";

type Props = {
  variant: "perfect" | "great-work" | "failed";
};

export function BoxResults({ variant = "great-work" }: Props) {
  return (
    <div className={`box-results ${variant ? `box-results--${variant}` : ""}`}>
      <h1 className="box-results__subtitle">Results</h1>
      <Icon110x110Star className="box-results__icon" />
      <p className="box-results__title">Perfect!</p>
    </div>
  );
}
