import React from "react";
import "./styles.css";

interface NavItemPros {
  text: string;
  drop: boolean;
}

const NavItem: React.FC<NavItemPros> = ({ text, drop }) => {
  return (
    <li className="nav-item">
      <a href="/#" className="nav-link text-align custom">
        <span className="mx-1">{text}</span>
        {!!drop && <i className="bi bi-chevron-down icon"></i>}
      </a>
    </li>
  );
};

export default NavItem;
