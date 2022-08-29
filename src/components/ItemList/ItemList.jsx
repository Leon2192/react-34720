import React from "react";
import Item from "../Item/Item";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ItemList = ({ productos }) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {productos.map((producto) => (
            <Grid key={producto.id} item xs={12} sm={6} md={4} lg={3}>
              <Item key={producto.id} producto={producto} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ItemList;
