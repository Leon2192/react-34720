import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  // Recibe la greeting que me pasa App al llamar este componente y la muestra en pantalla con un h1
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch(
      `https://github.com/Leon2192/react-34720/blob/master/src/figures.json`
    )
      .then((res) => res.json())
      .then((json) => setPersonajes(json));
    console.log(personajes);
  }, []);
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList personajes={personajes} />
    </div>
  );
};

export default ItemListContainer;
