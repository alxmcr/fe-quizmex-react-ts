import { NavLink, NavLinkProps } from "react-router-dom";
import "./AppNavLink.scss";

interface Props extends NavLinkProps {
  variant?: string;
}

export function AppNavLink(props: Props) {
  return (
    <NavLink
      to={props.to}
      className={`app-nav-link ${
        props.variant ? `app-nav-link--${props.variant}` : ""
      }`}
    >
      {props.children}
    </NavLink>
  );
}
