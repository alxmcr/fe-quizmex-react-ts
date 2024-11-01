import React from "react";
import { getVariant } from "../helpers/scores.utils";

export function useScoreVariant(correctScoreQuiz = 0, maxScoreQuiz = 0) {
  const [variant, setVariant] = React.useState("");

  React.useEffect(() => {
    const yourVariant = getVariant(maxScoreQuiz, correctScoreQuiz);
    setVariant(yourVariant);
  }, [maxScoreQuiz, correctScoreQuiz]);

  return { variant };
}
