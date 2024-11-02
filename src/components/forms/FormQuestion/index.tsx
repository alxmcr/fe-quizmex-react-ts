import React from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../../providers/QuizProvider/QuizContext";
import {
  increaseScoreQuizAction,
  moveNextQuestionAction,
} from "../../../store/quiz/actions/quizActions";
import { QuestionData } from "../../../types/service.types";
import { AppButton } from "../../buttons/AppButton";
import { ListAnswers } from "../../lists/ListAnswers";
import "./FormQuestion.scss";

type Props = {
  question: QuestionData;
};

export function FormQuestion(props: Props) {
  const navigate = useNavigate();
  const { state, dispatch } = React.useContext(QuizContext);

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
      <h1 className="question-container__title">{props.question.question}</h1>
      <ListAnswers answers={props.question.options} />
      <div className="form-question__actions">
        <AppButton type="submit">Send answer</AppButton>
      </div>
    </form>
  );
}
