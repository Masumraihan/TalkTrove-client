import React from "react";

const ActiveLink = ({ children, to }) => {
  // TODO add active link on navbar 
  <NavLink
    to={to}
    className={({ isActive}) => (isActive ? "active" : "")}
  >
    {children}
  </NavLink>;
};

export default ActiveLink;
