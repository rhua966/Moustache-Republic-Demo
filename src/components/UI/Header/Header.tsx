import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../models/types";

import MiniCart from "../../Cart/MiniCart";

import classes from "./Header.module.css";

const Header: React.FC = () => {
  const [displayMiniCart, setDisplayMiniCart] = useState(false);
  const totalAmount = useSelector<State, State["totalAmount"]>(
    (state) => state.totalAmount
  );

  const toggleDispalyMiniCart = () => {
    setDisplayMiniCart((prevState) => !prevState);
    // console.log(totalAmount);
  };

  return (
    <header className={classes.header}>
      {displayMiniCart && (
        <div className={classes.header__cart}>
          <MiniCart display={displayMiniCart} />
        </div>
      )}
      <div className={classes.header__button}>
        <div className={classes["header__button-text"]}>{`My Cart`}</div>
      </div>
    </header>
  );
};

export default Header;
