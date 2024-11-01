import { BoxResults } from "../../components/boxes/BoxResults";
import "./ScorePage.scss";

export function ScorePage() {
  return (
    <main className="score-page">
      <div className="score-page__container">
        <BoxResults />
      </div>
    </main>
  );
}
