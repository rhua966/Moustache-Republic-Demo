import React from "react";

import { useSelector } from "react-redux";
import { State } from "../../models/types";

import classes from "./MiniCart.module.css";

type MiniCartProp = {
  display: boolean;
}

const MiniCart: React.FC<MiniCartProp> = ({display}) => {
  const cart = useSelector<State, State["cart"]>((state) => state.cart);

  return (
    <div className={classes.cart}>
      {cart.length === 0 ? (
        <div
          style={{
            display: "flex",
            fontSize: "12px",
            justifyContent: "center",
            alignItems: "center",
          }}>
          Please buy something first
        </div>
      ) : (
        <div className={classes.cart__items}>
          {cart.map((cartItem) => {
            const { key, name, size, image, price, amount } = cartItem;
            return (
              <div key={key} className={classes.cart__item}>
                <div className={classes["cart__item-img"]}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={image}
                    alt={name}
                  />
                </div>
                <div className={classes["cart__item-detail"]}>
                  <div>{name}</div>
                  <div>{`$${price.toFixed(2)} x ${amount}`}</div>
                  <div>{`Size: ${size}`}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MiniCart;