import "./AppButton.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "perfect" | "great-work" | "failed";
}

export function AppButton(props: Props) {
  return (
    <button className={`app-button app-button--${props.variant}`}>
      {props.children}
    </button>
  );
}
