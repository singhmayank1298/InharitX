import { useSelector } from "react-redux";
import classes from "./ProductList.module.css";

const ProductList = () => {
  const allproduct = useSelector((state) => state.product.products);

  const orderHandler = () => {
    alert("Order placed ");
  };

  return (
    <>
      <div className={classes.App}>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th> Product Price</th>
              <th> Product Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {allproduct &&
              allproduct.map((product, index) => (
                <tr key={index} style={{ border: "1px solid gray" }}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.totalPrice}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <button type="button" onClick={orderHandler}>
          Place Order
        </button>
      </div>
    </>
  );
};

export default ProductList;
