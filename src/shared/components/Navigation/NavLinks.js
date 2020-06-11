import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className={classes.NavLinks}>
      <li onClick={props.clicked}>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li onClick={props.clicked}>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li onClick={props.clicked}>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}

      {!auth.isLoggedIn && (
        <li onClick={props.clicked}>
          <NavLink to="/auth">LOGIN</NavLink>
        </li>
      )}

      {auth.isLoggedIn && (
        <li onClick={props.clicked}>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
