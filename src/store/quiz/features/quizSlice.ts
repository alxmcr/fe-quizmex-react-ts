import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateQuizSlice } from "../../../helpers/redux.slice.quiz.constants";
import { LoadingStates } from "../../../types/app.enums";
import { QuestionData } from "../../../types/service.types";
import { fetchQuiz } from "./quizSlice.thunk";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: initialStateQuizSlice,
  reducers: {
    setQuestions: (state, action: PayloadAction<QuestionData[]>) => {
      state.quiz.questions = action.payload;
    },
    setStatusLoading: (state, action: PayloadAction<string>) => {
      state.statusLoadingQuiz = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.errorLoadingQuiz = action.payload;
    },
    setAnswerSelected: (state, action: PayloadAction<string>) => {
      state.answerSelected = action.payload;
    },
    movePreviousQuestion: (state) => {
      state.indexCurrentQuestion -= 1;
    },
    moveNextQuestion: (state) => {
      state.indexCurrentQuestion += 1;
    },
    increaseScore: (state) => {
      state.score += 1;
    },
    decreaseScore: (state) => {
      state.score -= 1;
    },
    reset: (state) => {
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
  setQuestions,
  setStatusLoading,
  setError,
  setAnswerSelected,
  movePreviousQuestion,
  increaseScore,
  decreaseScore,
  moveNextQuestion,
  reset,
} = quizSlice.actions;
