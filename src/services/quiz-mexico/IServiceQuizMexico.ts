import { QuestionData } from "../../types/service.types";

export interface IServiceQuizMexico {
  findAll(language: string): Promise<QuestionData[]>;
}
