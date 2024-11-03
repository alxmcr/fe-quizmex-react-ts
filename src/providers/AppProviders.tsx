import { QuizProviderRTK } from "./QuizProviderRTK";

type Props = {
  children: React.ReactNode;
};

export function AppProviders({ children }: Props) {
  return <QuizProviderRTK>{children}</QuizProviderRTK>;
}
