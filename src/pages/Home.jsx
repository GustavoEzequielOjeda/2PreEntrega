import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import axios from "axios";
const Home = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {setProducts(res.data.products)})
      .catch((err) => {});
  }, []);

  return <ItemListContainer productsData={products}/>;
};
export default Home;
