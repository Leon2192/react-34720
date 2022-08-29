import { Button } from "@mui/material";
import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ detail }) => {
  const [count, setCount] = useState(0);
  const stock = 10;

  const handleAumentar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("¡Lo sentimos!No tenemos más unidades.");
    }
  };

  const handleRestar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Por favor, seleccioná al menos 1 unidad.");
    }
  };

  const onAdd = () => {
    console.log(count);
  };
  return (
    <div>
      <h1>{detail.title}</h1>
      <h2>{detail.price}</h2>
      <img src={detail.image} alt={detail.id} width={300} height={300} />
      <ItemCount
        count={count}
        handleAumentar={handleAumentar}
        handleRestar={handleRestar}
        onAdd={onAdd}
      />
      <Button variant="outlined">Agregar producto</Button>
      <Button variant="outlined" color="secondary">Eliminar producto</Button>
      <Button variant="outlined" color="error">
        Vaciar Carrito
      </Button>
    </div>
  );
};

export default ItemDetail;
