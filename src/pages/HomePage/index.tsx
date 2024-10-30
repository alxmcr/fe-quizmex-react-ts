import { AppButton } from "../../components/buttons/AppButton";
import "./HomePage.scss";

export function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <AppButton>Play</AppButton>
        <AppButton variant="perfect">Play Again</AppButton>
        <AppButton variant="great-work">Play Again</AppButton>
        <AppButton variant="failed">Try Again</AppButton>
      </div>
    </main>
  );
}
