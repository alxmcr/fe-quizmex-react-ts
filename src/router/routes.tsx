import { RouteObject } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { QuestionsPage } from "../pages/QuestionsPage";
import { ScorePage } from "../pages/ScorePage";

export const routes: RouteObject[] = [
  {
    id: "home-page",
    path: "/",
    element: <HomePage />,
  },
  {
    id: "questions-page",
    path: "/questions",
    element: <QuestionsPage />,
  },
  {
    id: "score-page",
    path: "/score",
    element: <ScorePage />,
  },
];
