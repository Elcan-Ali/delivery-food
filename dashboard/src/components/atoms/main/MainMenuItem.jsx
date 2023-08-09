import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function MainMenuItem({ icon, activeIcon, text, link }) {
  const location = useLocation();
  const path = location.pathname === link;

  return (
    <NavLink className='main-menu-items' to={link}>
      <img src={path ? activeIcon : icon} alt='menu-items-icon' />
      <p>{text}</p>
    </NavLink>
  );
}

export default MainMenuItem;
