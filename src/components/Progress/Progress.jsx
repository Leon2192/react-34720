import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function Progress() {
  return (
    <Box sm={{ width: "100%" }}>
      <Skeleton />
      <Skeleton animation="wave" height="300px" />
      <Skeleton animation={true} height="300px" />
    </Box>
  );
}
