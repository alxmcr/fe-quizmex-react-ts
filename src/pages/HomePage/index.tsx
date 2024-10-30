import { AppButton } from "../../components/buttons/AppButton";
import "./HomePage.scss";

export function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <AppButton>Play</AppButton>
      </div>
    </main>
  );
}
