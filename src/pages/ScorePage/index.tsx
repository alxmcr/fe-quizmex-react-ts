import React from "react";
import { BoxResults } from "../../components/boxes/BoxResults";
import { BoxScore } from "../../components/boxes/BoxScore";
import { AppButton } from "../../components/buttons/AppButton";
import { useScoreVariant } from "../../hooks/useScoreVariant";
import { QuizContext } from "../../providers/QuizProvider/QuizContext";
import "./ScorePage.scss";
import { resetQuizAction } from "../../store/quiz/actions/quizActions";
import { useNavigate } from "react-router-dom";

export function ScorePage() {
  const navigate = useNavigate();
  const { state, dispatch } = React.useContext(QuizContext);
  const { score } = useScoreVariant(state.score, state.quiz.questions.length);

  const onClickPlayAgain = () => {
    dispatch(resetQuizAction());
    navigate("/questions");
  };

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
        <AppButton variant={score.code} onClick={onClickPlayAgain}>
          {state.score < 5 ? "Try again" : "Play again"}
        </AppButton>
      </div>
    </main>
  );
}
