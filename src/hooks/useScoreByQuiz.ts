import React from "react";
import { ScoreData } from "../types/app.types";
import { QuizData } from "../types/service.types";
import { getVariant } from "../helpers/scores.utils";

export function useScoreByQuiz(quiz: QuizData, correctScoreQuiz = 0) {
  const maxScoreQuiz = quiz.questions.length;
  const [score, setScore] = React.useState<ScoreData | null>(null);

  React.useEffect(() => {
    const yourVariant = getVariant(maxScoreQuiz, correctScoreQuiz);

    setScore(yourVariant);
  }, [correctScoreQuiz, maxScoreQuiz]);

  return { score };
}
