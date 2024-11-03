import React from "react";
import { BoxResults } from "../../components/boxes/BoxResults";
import { BoxScore } from "../../components/boxes/BoxScore";
import { AppButton } from "../../components/buttons/AppButton";
import { useScoreByQuiz } from "../../hooks/useScoreByQuiz";
import { QuizContext } from "../../providers/QuizProvider/QuizContext";
import { resetQuizAction } from "../../store/quiz/actions/quizActions";
import "./ScorePage.scss";
import { useNavigate } from "react-router-dom";

export function ScorePage() {
  const navigate = useNavigate();
  const { state, dispatch } = React.useContext(QuizContext);
  const { score } = useScoreByQuiz(state.quiz, state.score);

  const onPlayAgain = () => {
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
        <AppButton variant={score.code} onClick={onPlayAgain}>
          {state.score < 5 ? "Try again" : "Play again"}
        </AppButton>
      </div>
    </main>
  );
}
