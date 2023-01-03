import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../Store/productServer";
import classes from "./AddProductWithDiscont.module.css";
import ProductList from "./ProductList";

const AddProductWithDiscount = () => {
  const [data, setData] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });
  const dispatch = useDispatch();
  const enteredName = useRef("");
  const enteredPrice = useRef("");
  const enteredQuantity = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const name = enteredName.current.value;
    const price = Number(enteredPrice.current.value);
    const quantity = Number(enteredQuantity.current.value);

    let discount = 0;

    if (quantity > 10) {
      discount = 5 / 100;
    }
    if (quantity > 50) {
      discount = 10 / 100;
    }
    if (quantity > 90) {
      discount = 20 / 100;
    }
    const totalDiscount = price * quantity * discount;
    //const totalPrice = price - totalDiscount;
    let a = price * quantity;
    let totalPrice = a - totalDiscount;
    const obj = {
      name,
      price,
      quantity,
      id: Math.random(),
      totalPrice,
    };
    dispatch(addNewProduct(obj));
    setData({
      name: "",
      price: 0,
      quantity: 0,
    });
  };

  return (
    <section className={classes.auth}>
      <h1>Add product</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Product Name </label>
          <input type="text" ref={enteredName} required />
        </div>
        <div className={classes.control}>
          <label>Product Price </label>
          <input type="number" ref={enteredPrice} required />
        </div>
        <div className={classes.control}>
          <label>Product Quantity </label>
          <input type="number" ref={enteredQuantity} required />
        </div>
        <div className={classes.actions}>
          <button type="submit">Add To List</button>
        </div>
      </form>
      <ProductList></ProductList>
    </section>
  );
};

export default AddProductWithDiscount;
