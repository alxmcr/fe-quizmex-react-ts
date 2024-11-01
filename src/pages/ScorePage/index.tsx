import { BoxResults } from "../../components/boxes/BoxResults";
import { BoxScore } from "../../components/boxes/BoxScore";
import { AppButton } from "../../components/buttons/AppButton";
import { useScoreVariant } from "../../hooks/useScoreVariant";
import "./ScorePage.scss";

export function ScorePage() {
  const maxScoreQuiz = 10;
  const correctScoreQuiz = 2;
  const incorrectScoreQuiz = maxScoreQuiz - correctScoreQuiz;
  const { variant } = useScoreVariant(correctScoreQuiz, maxScoreQuiz);

  return (
    <main className="score-page">
      <div className="score-page__container">
        <BoxResults variant={variant} />
        <div className="score-page__scores">
          <BoxScore
            title="Correct"
            score={correctScoreQuiz}
            maxScore={maxScoreQuiz}
            variant={variant}
          />
          <BoxScore
            title="Incorrect"
            score={incorrectScoreQuiz}
            maxScore={maxScoreQuiz}
            variant={variant}
          />
        </div>
        <AppButton variant={variant}>
          {correctScoreQuiz < 5 ? "Try again" : "Play again"}
        </AppButton>
      </div>
    </main>
  );
}
