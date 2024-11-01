import mockQuestionsEn from "../../mocks/data/en/quiz/01-en-quiz-mexico.json";
import mockQuestionsEs from "../../mocks/data/es/quiz/01-es-quiz-mexico.json";
import { QuestionData } from "../../types/service.types";
import { IServiceQuizMexico } from "./IServiceQuizMexico";

export class ServiceQuizMexico implements IServiceQuizMexico {
  findAll(language = "es"): Promise<QuestionData[]> {
    return new Promise((resolve, reject) => {
      try {
        if (language === "es") {
          resolve(mockQuestionsEs);
        } else {
          resolve(mockQuestionsEn);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
