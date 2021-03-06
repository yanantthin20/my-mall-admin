import React from "react";
import { Box, Typography } from "@material-ui/core";
import ProductView from "./ProductView";

const HorizontalScroller = () => {
  return (
    <Box bgcolor="yellow" p="16px">
      <Typography variant="h5">Title</Typography>
      <Box display="flex" overflow="auto">
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
      </Box>
    </Box>
  );
};

export default HorizontalScroller;
