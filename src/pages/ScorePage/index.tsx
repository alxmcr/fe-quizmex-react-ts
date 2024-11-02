import { BoxResults } from "../../components/boxes/BoxResults";
import { BoxScore } from "../../components/boxes/BoxScore";
import { AppButton } from "../../components/buttons/AppButton";
import { useScoreVariant } from "../../hooks/useScoreVariant";
import "./ScorePage.scss";

export function ScorePage() {
  const maxScoreQuiz = 10;
  const correctScoreQuiz = 7;
  const incorrectScoreQuiz = maxScoreQuiz - correctScoreQuiz;
  const { score } = useScoreVariant(correctScoreQuiz, maxScoreQuiz);

  if (score === null) {
    return null;
  }

  return (
    <main className="score-page">
      <div className="score-page__container">
        <BoxResults variant={score.code} />
        <div className="score-page__scores">
          <BoxScore
            title="Correct"
            score={correctScoreQuiz}
            maxScore={maxScoreQuiz}
            variant={score.code}
          />
          <BoxScore
            title="Incorrect"
            score={incorrectScoreQuiz}
            maxScore={maxScoreQuiz}
          />
        </div>
        <AppButton variant={score.code}>
          {correctScoreQuiz < 5 ? "Try again" : "Play again"}
        </AppButton>
      </div>
    </main>
  );
}
