import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/ItemListContainer/LoaderComponent/LoaderComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function getProduct() {
    return axios.get("https://dummyjson.com/products?limit=10");
  }

const Category = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
      getProduct()
        .then((res) => {
            const categoryFilter= res.data.products.filter(item => item.category === categoryId);
          setProducts(categoryFilter);
        })
  
        .catch((err) => {})
        .then(() => setLoading(false));
    }, [categoryId]);
  
    return loading ? (
      <LoaderComponent />
    ) : (
      <ItemListContainer productsData={products} />
    );
  };

export default Category;