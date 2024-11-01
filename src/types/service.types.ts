export enum LoadingStates {
  IDLE = "IDLE",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export type QuestionData = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  hint: string;
};
