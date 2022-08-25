import React from "react";

const ItemListContainer = ({ greeting }) => {
  // Recibe la greeting que me pasa App al llamar este componente y la muestra en pantalla con un h1
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
