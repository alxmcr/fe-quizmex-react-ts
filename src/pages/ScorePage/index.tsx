import { BoxResults } from "../../components/boxes/BoxResults";
import { BoxScore } from "../../components/boxes/BoxScore";
import { AppButton } from "../../components/buttons/AppButton";
import "./ScorePage.scss";

export function ScorePage() {
  const maxScore = 10;
  const correctScore = 8;
  const incorrectScore = maxScore - correctScore;

  return (
    <main className="score-page">
      <div className="score-page__container">
        <BoxResults />
        <div className="score-page__scores">
          <BoxScore title="Correct" score={correctScore} maxScore={maxScore} />
          <BoxScore
            title="Incorrect"
            score={incorrectScore}
            maxScore={maxScore}
          />
        </div>
        <AppButton>Play again</AppButton>
      </div>
    </main>
  );
}
