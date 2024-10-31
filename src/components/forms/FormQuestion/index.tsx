import React from "react";
import "./FormQuestion.scss";

export function FormQuestion() {
  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
  };

  return <form onSubmit={onSubmit} className="form-question"></form>;
}
