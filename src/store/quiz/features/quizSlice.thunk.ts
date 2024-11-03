import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServiceQuizMexico } from "../../../services/quiz-mexico/ServiceQuizMexico";

// Async thunk to fetch data
export const fetchQuiz = createAsyncThunk("quiz/fetchQuiz", async () => {
  const service = new ServiceQuizMexico();

  return await service.findAll();
});
