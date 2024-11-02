import { RouteObject } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const routes: RouteObject[] = [
  {
    id: "home-page",
    path: "/",
    element: <HomePage />,
  },
  {
    id: "questions-page",
    path: "/questions",
    async lazy() {
      const { QuestionsPage } = await import("../pages/QuestionsPage/index");
      return { Component: QuestionsPage };
    },
  },
  {
    id: "score-page",
    path: "/score",
    async lazy() {
      const { ScorePage } = await import("../pages/ScorePage/index");
      return { Component: ScorePage };
    },
  },
];
