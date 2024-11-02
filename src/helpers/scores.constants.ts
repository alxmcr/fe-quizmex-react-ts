import { ScoreData } from "../types/app.types";

export const PERFECT: ScoreData = {
  id: "score-001",
  code: "perfect",
  text: "Perfect!",
  icon: "star",
};

export const GREAT_WORK: ScoreData = {
  id: "score-002",
  code: "great-work",
  text: "Great work!",
  icon: "list-fail",
};

export const FAILED: ScoreData = {
  id: "score-003",
  code: "failed",
  text: "Failed!",
  icon: "retry-failed",
};
