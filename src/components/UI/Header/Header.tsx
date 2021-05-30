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
  const toggleDisplayMiniCart = () => {
    setDisplayMiniCart((prevState) => !prevState);

  };
  return (
    <header className={classes.header}>
      {displayMiniCart && (
        <div className={classes.header__cart}>
          <MiniCart display={ displayMiniCart }/>
        </div>
      )}
      <div
        className={classes.header__button}
        style={
          displayMiniCart
            ? {
                border: "1px solid gray",
                background: "white",
                borderBottomColor: "#ffffff",
              }
            : { border: 0 }
        }>
        <div
          className={classes["header__button-text"]}
          onClick={toggleDisplayMiniCart}>
          {`My Cart${totalAmount > 0 ? `(${totalAmount})` : ""}`}
        </div>
      </div>
    </header>
  );
};

export default Header;
