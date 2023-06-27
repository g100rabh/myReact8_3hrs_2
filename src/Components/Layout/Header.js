import React from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <React.Fragment>
        <header className={classes.header}>
          <h1>Medicos</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
      </React.Fragment>
    </div>
  );
};

export default Header;
