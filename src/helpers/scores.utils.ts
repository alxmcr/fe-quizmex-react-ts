import { FAILED, GREAT_WORK, PERFECT } from "./scores.constants";

export function getVariant(maxScore = 0, correctScore = 0) {
  if (correctScore > 0 && maxScore > 0 && correctScore === maxScore) {
    return PERFECT;
  } else if (correctScore >= maxScore / 2) {
    return GREAT_WORK;
  }
  return FAILED;
}
