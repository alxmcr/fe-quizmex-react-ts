import React from "react";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz } from "../store/quiz/features/quizSlice.thunk";

export function useQuestionsRTK() {
  const state = useSelector((state: RootState) => state.quiz);
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  return { state };
}
