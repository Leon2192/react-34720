import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div>
      <Link to={"/item/" + producto.id} style={{ textDecoration: "none" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                10
              </Avatar>
            }
            action={
              <Typography className="actionPrice" variant="h5" color="green">
                ${producto.price}
              </Typography>
            }
            title={producto.title}
            subheader="Hay stock"
          />
          <CardMedia
            component="img"
            height="194"
            image={producto.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {producto.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to cart">
              <ShoppingCartIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="share">
              <FavoriteBorderIcon fontSize="large" />
            </IconButton>
          </CardActions>
          <Collapse timeout="auto" unmountOnExit></Collapse>
        </Card>
      </Link>
    </div>
  );
};

export default Item;
