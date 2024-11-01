import { Icon110x110Star } from "../../icons/110x110/Icon110x110Star";
import "./BoxResults.scss";

export function BoxResults() {
  return (
    <div className="box-results">
      <h1 className="box-results__subtitle">Results</h1>
      <Icon110x110Star className="box-results__icon" />
      <p className="box-results__title">Perfect!</p>
    </div>
  );
}
