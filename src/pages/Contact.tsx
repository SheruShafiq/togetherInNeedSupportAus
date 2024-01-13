import { Box, Typography } from "@mui/material";

import React from "react";

function Contact() {
  return (
    <Box
      bgcolor={"#fb654e"}
      display={"flex"}
      justifyContent={"center"}
      minWidth={"100vh"}
      minHeight={"100vh"}
    >
      <Box alignSelf={"center"}>
        <Typography
          color={"white"}
          fontFamily={"HiddenCocktails"}
          textAlign={"center"}
          variant="h1"
        >
          This is the Contact page!
        </Typography>
      </Box>
    </Box>
  );
}

export default Contact;
