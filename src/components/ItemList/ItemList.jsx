import React from "react";
import Item from "../Item/Item";
import figuras from '../../figures.json';

const ItemList = ({ personajes }) => {
  return (
    <div>
      {personajes.map((personaje) => {
        return (
          <div key={personaje.nombre}>
            <Item personaje={personaje} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
