import React from "react";
import { BoxResults } from "../../components/boxes/BoxResults";
import { BoxScore } from "../../components/boxes/BoxScore";
import { AppButton } from "../../components/buttons/AppButton";
import { useScoreByQuiz } from "../../hooks/useScoreByQuiz";
import { QuizContext } from "../../providers/QuizProvider/QuizContext";
import "./ScorePage.scss";

export function ScorePage() {
  const { state } = React.useContext(QuizContext);
  const { score } = useScoreByQuiz(state.quiz, state.score);

  if (score === null) {
    return null;
  }

  return (
    <main className="score-page">
      <div className="score-page__container">
        <BoxResults score={score} />
        <div className="score-page__scores">
          <BoxScore
            title="Correct"
            score={state.score}
            maxScore={state.quiz.questions.length}
            variant={score.code}
          />
          <BoxScore
            title="Incorrect"
            score={state.quiz.questions.length - state.score}
            maxScore={state.quiz.questions.length}
          />
        </div>
        <AppButton variant={score.code}>
          {state.score < 5 ? "Try again" : "Play again"}
        </AppButton>
      </div>
    </main>
  );
}
