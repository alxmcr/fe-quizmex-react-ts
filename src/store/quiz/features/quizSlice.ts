import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateQuizSlice } from "../../../helpers/redux.slice.quiz.constants";
import { LoadingStates } from "../../../types/app.enums";
import { QuestionData } from "../../../types/service.types";
import { fetchQuiz } from "./quizSlice.thunk";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: initialStateQuizSlice,
  reducers: {
    setQuestionsRTK: (state, action: PayloadAction<QuestionData[]>) => {
      state.quiz.questions = action.payload;
    },
    setStatusLoadingRTK: (state, action: PayloadAction<string>) => {
      state.statusLoadingQuiz = action.payload;
    },
    setErrorRTK: (state, action: PayloadAction<Error>) => {
      state.errorLoadingQuiz = action.payload;
    },
    setAnswerSelectedRTK: (state, action: PayloadAction<string>) => {
      state.answerSelected = action.payload;
    },
    movePreviousQuestionRTK: (state) => {
      state.indexCurrentQuestion -= 1;
    },
    moveNextQuestionRTK: (state) => {
      state.indexCurrentQuestion += 1;
    },
    increaseScoreRTK: (state) => {
      state.score += 1;
    },
    decreaseScoreRTK: (state) => {
      state.score -= 1;
    },
    resetRTK: (state) => {
      state.answerSelected = "";
      state.errorLoadingQuiz = null;
      state.indexCurrentQuestion = 1;
      state.score = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuiz.pending, (state) => {
        state.statusLoadingQuiz = LoadingStates.PENDING;
      })
      .addCase(fetchQuiz.fulfilled, (state, action) => {
        state.statusLoadingQuiz = LoadingStates.SUCCESS;
        state.quiz.questions = action.payload;
      })
      .addCase(fetchQuiz.rejected, (state) => {
        state.statusLoadingQuiz = LoadingStates.ERROR;
      });
  },
});

export const quizReducer = quizSlice.reducer;

export const {
  setQuestionsRTK,
  setStatusLoadingRTK,
  setErrorRTK,
  setAnswerSelectedRTK,
  movePreviousQuestionRTK,
  increaseScoreRTK,
  decreaseScoreRTK,
  moveNextQuestionRTK,
  resetRTK,
} = quizSlice.actions;
