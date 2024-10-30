import { NavLink, NavLinkProps } from "react-router-dom";
import "./AppNavLink.scss";

interface Props extends NavLinkProps {
  variant?: "perfect" | "great-work" | "failed";
}

export function AppNavLink(props: Props) {
  return (
    <NavLink to={props.to} className="app-nav-link">
      {props.children}
    </NavLink>
  );
}
