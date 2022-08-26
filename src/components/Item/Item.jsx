import React from "react";

const Item = ({ personaje }) => {
  return (
    <div>
      <h1>{personaje.name}</h1>
    </div>
  );
};

export default Item;
