import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  // Recibe la greeting que me pasa App al llamar este componente y la muestra en pantalla con un h1
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setProductos(json));
    console.log(productos);
  }, []);
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
