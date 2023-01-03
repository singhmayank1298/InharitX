import { productAction } from "./productReducer";
import axios from "axios";

let Url = "https://crudcrud.com/api/1bebf08909b844e08cc49e7e147c93a6/products";
export const addNewProduct = (obj) => {
  return async (dispatch) => {
    const Product = async () => {
      try {
        const res = await axios.post(Url, obj);

        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
    await Product();
    dispatch(productAction.addProduct(obj));
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(Url);

        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
    const data = await fetchdata();
    dispatch(productAction.allItems(data));
  };
};
