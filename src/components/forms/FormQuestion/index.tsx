import React from "react";
import { useNavigate } from "react-router-dom";
import {
  increaseScoreQuizAction,
  moveNextQuestionAction,
} from "../../../store/quiz/actions/quizActions";
import { QuestionData } from "../../../types/service.types";
import { QuizAction } from "../../../types/store.quiz.types.actions";
import { AppButton } from "../../buttons/AppButton";
import { ListAnswers } from "../../lists/ListAnswers";
import "./FormQuestion.scss";

type Props = {
  question: QuestionData;
};

export function FormQuestion(props: Props) {
  const navigate = useNavigate();
  const dispatch = (x: QuizAction) => {
    console.log(x);
  };
  const answerSelected = "1810";
  const indexCurrentQuestion = 1;
  const questions = [];

  const onSubmitAnswer = (ev: React.FormEvent) => {
    ev.preventDefault();

    if (answerSelected === props.question.correctAnswer) {
      dispatch(increaseScoreQuizAction());
    }

    if (indexCurrentQuestion < questions.length) {
      dispatch(moveNextQuestionAction());
    } else {
      navigate("/score");
    }
  };

  return (
    <form onSubmit={onSubmitAnswer} className="form-question">
      <h1 className="question-container__title">{props.question.question}</h1>
      <ListAnswers answers={props.question.options} />
      <div className="form-question__actions">
        <AppButton type="submit">Send answer</AppButton>
      </div>
    </form>
  );
}
