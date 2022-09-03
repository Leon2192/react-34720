import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  // Recibe la greeting que me pasa App al llamar este componente y la muestra en pantalla con un h1
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((json) => setProductos(json));
      console.log(productos);
    } else {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((json) =>
          setProductos(
            json.filter((producto) => producto.category === categoryId)
          )
        );
    }
  }, [categoryId]);
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
