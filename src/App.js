import "./App.css";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
  // Desafío nª 4

  const [count, setCount] = useState(0);
  const stock = 10;
  const greeting = "Esto es mi prop greeting";

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
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={greeting} />
      <h2>Acá pongo mi contador</h2>
      <ItemCount
        count={count}
        handleAumentar={handleAumentar}
        handleRestar={handleRestar}
        onAdd={onAdd}
      />
    </div>
  );
}

export default App;
