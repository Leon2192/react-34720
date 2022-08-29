import "./App.css";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Routing from "./Routes/Routing";

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
      <Routing />
    </div>
  );
}

export default App;
