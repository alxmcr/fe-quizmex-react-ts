import "./AppButton.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

export function AppButton(props: Props) {
  return (
    <button
      className={`app-button ${
        props.variant ? `app-button--${props.variant}` : ""
      }`}
    >
      {props.children}
    </button>
  );
}
