import React from "react";
import { getVariant } from "../helpers/scores.utils";
import { ScoreData } from "../types/app.types";

export function useScoreVariant(correctScoreQuiz = 0, maxScoreQuiz = 0) {
  const [score, setScore] = React.useState<ScoreData | null>(null);

  React.useEffect(() => {
    const yourVariant = getVariant(maxScoreQuiz, correctScoreQuiz);
    setScore(yourVariant);
  }, [maxScoreQuiz, correctScoreQuiz]);

  return { score };
}
