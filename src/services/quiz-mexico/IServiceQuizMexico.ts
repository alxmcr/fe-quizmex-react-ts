import { QuestionData } from "../../types/serviceTypes";

export interface IServiceQuizMexico {
  findAll(language: string): Promise<QuestionData[]>;
}
