import { KindOfScore } from "../types/app.enums";

export function getVariant(maxScore = 0, correctScore = 0) {
  if (correctScore > 0 && maxScore > 0 && correctScore === maxScore) {
    return KindOfScore.PERFECT;
  } else if (correctScore >= maxScore / 2) {
    return KindOfScore.GREAT_WORK;
  }
  return KindOfScore.FAILED;
}
