import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/ItemListContainer/LoaderComponent/LoaderComponent";
import { useEffect, useState } from "react";
import axios from "axios";

function getProduct() {
  return axios.get("https://dummyjson.com/products?limit=10");
}

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct()
      .then((res) => {
        setProducts(res.data.products);
      })

      .catch((err) => {})
      .then(() => setLoading(false));
  }, []);

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainer productsData={products} />
  );
};

export default Home;
