import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import {
  increaseScoreQuizAction,
  moveNextQuestionAction,
} from "../../../store/quiz/actions/quizActions";
import { QuestionData } from "../../../types/service.types";
import { BoxQuestion } from "../../boxes/BoxQuestion";
import { AppButton } from "../../buttons/AppButton";
import { ListAnswers } from "../../lists/ListAnswers";
import "./FormQuestion.scss";

type Props = {
  question: QuestionData;
};

export function FormQuestion(props: Props) {
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  const onSubmitAnswer = (ev: React.FormEvent) => {
    ev.preventDefault();

    if (state.answerSelected === props.question.correctAnswer) {
      dispatch(increaseScoreQuizAction());
    }

    if (state.indexCurrentQuestion < state.quiz.questions.length) {
      dispatch(moveNextQuestionAction());
    } else {
      navigate("/score");
    }
  };

  return (
    <form onSubmit={onSubmitAnswer} className="form-question">
      <BoxQuestion question={props.question.question} />
      <ListAnswers answers={props.question.options} />
      <div className="form-question__actions">
        <AppButton type="submit">Send answer</AppButton>
      </div>
    </form>
  );
}
