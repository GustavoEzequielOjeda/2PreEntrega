import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetailsContainer from "../components/ItemDetailsContainer/ItemDetailsContainer";

function getProductId(id) {
  return axios.get(`https://dummyjson.com/products/${id}`);
}

const ItemDetails = () => {
    const [product, setProduct] = useState({})
  const { itemId } = useParams();

  useEffect(() => {
    axios;
    getProductId(itemId)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {});
  }, [itemId]);
  return <ItemDetailsContainer productData={product}/>
};
export default ItemDetails;
