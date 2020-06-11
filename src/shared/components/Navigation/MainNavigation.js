import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UI/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      <SideDrawer show={drawerIsOpen}>
        <nav className={classes.MainNavigation__drawer__nav}>
          <NavLinks clicked={() => closeDrawer()} />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className={classes.MainNavigation__menu__btn}
          onClick={openDrawer}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className={classes.MainNavigation__title}>
          <Link to="/">Your Places</Link>
        </h1>
        <nav className={classes.MainNavigation__header__nav}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
