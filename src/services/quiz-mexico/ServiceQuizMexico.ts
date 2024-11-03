import mockTenQuestionsEn from "../../mocks/data/en/quiz/02-en-quiz-mexico-ten.json";
import mockTenQuestionsEs from "../../mocks/data/es/quiz/02-es-quiz-mexico-ten.json";
import { QuestionData } from "../../types/service.types";
import { IServiceQuizMexico } from "./IServiceQuizMexico";

export class ServiceQuizMexico implements IServiceQuizMexico {
  findAll(language = "en"): Promise<QuestionData[]> {
    return new Promise((resolve, reject) => {
      try {
        if (language === "es") {
          resolve(mockTenQuestionsEs);
        } else {
          resolve(mockTenQuestionsEn);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
