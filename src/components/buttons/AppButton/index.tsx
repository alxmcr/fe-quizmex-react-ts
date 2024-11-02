import "./AppButton.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

export function AppButton(props: Props) {
  return (
    <button {...props} className={`app-button app-button--${props.variant}`}>
      {props.children}
    </button>
  );
}
