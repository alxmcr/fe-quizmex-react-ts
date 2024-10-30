import { Icon110x110Poncho } from "../../components/icons/110x110/Icon110x110Poncho";
import { AppNavLink } from "../../components/links/AppNavLink";
import "./HomePage.scss";

export function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <Icon110x110Poncho />
        <h1 className="home-page__title">QuizMex</h1>
        <p className="home-page__description">
          Play to test your knowledge about Mexico's history
        </p>
        <AppNavLink to="/questions">Play</AppNavLink>
      </div>
    </main>
  );
}
