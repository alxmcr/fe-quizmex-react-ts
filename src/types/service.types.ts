export type QuestionData = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  hint: string;
};

export type QuizData = {
  questions: QuestionData[];
};
