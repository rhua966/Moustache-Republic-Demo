import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import classes from "./Product.module.css";

import { ProductItem, Size, State } from "../../models/types";
import { tee } from "../../models/data";

const Product: React.FC = () => {
  const [product, setProduct] = useState<ProductItem>(tee);
  const [selectedSize, setSelectedSize] = useState<Size>(null);

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    console.log("CLICKED!")
    dispatch({
      type: "ADD",
      item: {
        key: product.key + selectedSize,
        name: product.name,
        size: selectedSize,
        image: product.image,
        price: product.price,
        amount: 1
      }
    })
  }

  useEffect(() => {
    setProduct(tee);
    console.log(product);
  }, []);

  return (
    <>
      {product && (
        <main className={classes.product}>
          <div className={classes.product__image}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={product.image}
              alt="Tee"
            />
          </div>
          <div className={classes.product__details}>
            <div className={classes.product__name}>{product.name}</div>
            <div className={classes.product__price}>{`$${product.price.toFixed(
              2
            )}`}</div>
            <div className={classes.product__description}>
              {product.description}
            </div>
            <div className={classes["product__size-label"]}>
              <span>SIZE</span>
              <span style={{ color: "#C90000" }}>* </span>
              <span style={{ color: "#222222" }}>{selectedSize}</span>
            </div>
            <div className={classes["product__size-buttons"]}>
              {product.avaliableSizes.map((size) => {
                return (
                  <div
                    key={size}
                    style={{
                      borderColor:
                        size === selectedSize ? "#222222" : "#CCCCCC",
                    }}
                    onClick={()=> {setSelectedSize(size)}}>
                    {size}
                  </div>
                );
              })}
            </div>
            <div className={classes["product__buy-button"]} onClick={addToCartHandler}>ADD TO CART</div>
          </div>
        </main>
      )}
    </>
  );
};

export default Product;
