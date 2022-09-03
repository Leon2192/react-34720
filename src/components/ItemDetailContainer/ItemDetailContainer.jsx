import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Progress from "../Progress/Progress";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  const detailFunction = async () => {
    try {
      const data = await axios
        .get(`https://fakestoreapi.com/products/${itemId}`)
        .then((res) => {
          console.log(res);
          setDetail(res.data);
        });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    detailFunction();
  }, [itemId]);

  return <div>{loading ? <ItemDetail detail={detail} /> : <Progress />}</div>;
};

export default ItemDetailContainer;
