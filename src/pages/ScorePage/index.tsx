import { BoxResults } from "../../components/boxes/BoxResults";
import { BoxScore } from "../../components/boxes/BoxScore";
import { AppButton } from "../../components/buttons/AppButton";
import "./ScorePage.scss";

export function ScorePage() {
  const maxScoreQuiz = 10;
  const correctScoreQuiz = 8;
  const incorrectScoreQuiz = maxScoreQuiz - correctScoreQuiz;

  function getVariant(maxScore = 0, correctScore = 0) {
    if (correctScore > 0 && maxScore > 0 && correctScore === maxScore) {
      return "perfect";
    } else if (correctScore >= maxScore / 2) {
      return "great-work";
    }
    return "failed";
  }

  return (
    <main className="score-page">
      <div className="score-page__container">
        <BoxResults variant={getVariant(maxScoreQuiz, correctScoreQuiz)} />
        <div className="score-page__scores">
          <BoxScore
            title="Correct"
            score={correctScoreQuiz}
            maxScore={maxScoreQuiz}
          />
          <BoxScore
            title="Incorrect"
            score={incorrectScoreQuiz}
            maxScore={maxScoreQuiz}
          />
        </div>
        <AppButton>Play again</AppButton>
      </div>
    </main>
  );
}
