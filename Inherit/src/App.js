import React, { useEffect } from "react";
import { fetchProducts } from "./Store/productServer";
import { useDispatch } from "react-redux";

import AddProductWithDiscount from "./components/AddProductWithDiscount";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <AddProductWithDiscount></AddProductWithDiscount>
    </>
  );
}

export default App;
