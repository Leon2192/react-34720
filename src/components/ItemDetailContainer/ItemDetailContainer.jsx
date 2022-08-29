import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Progress from "../Progress/Progress";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => setDetail(res.data))
      .then(setLoading(false));
    console.log(detail);
  }, [itemId]);

  return <div>{loading ? <Progress /> : <ItemDetail detail={detail} />}</div>;
};

export default ItemDetailContainer;
