import { Button } from "@mui/material";
import React from "react";

const ItemCount = ({ handleAumentar, handleRestar, onAdd, count }) => {
  return (
    <div>
      <Button onClick={handleAumentar}>Sumar</Button>
      <Button onClick={handleRestar}>Restar</Button>
      <h3>{count}</h3>
      <Button onClick={onAdd}>Agregar al carrito</Button>
    </div>
  );
};

export default ItemCount;
