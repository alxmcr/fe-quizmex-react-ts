import { QuizProvider } from "./QuizProvider";

type Props = {
  children: React.ReactNode;
};

export function AppProviders({ children }: Props) {
  return <QuizProvider>{children}</QuizProvider>;
}
