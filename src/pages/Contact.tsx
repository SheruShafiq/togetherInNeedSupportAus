import { Box, Typography } from "@mui/material";

import NavBar from "../components/NavBar";
import React from "react";

function Contact() {
  return (
    <Box
      bgcolor={"#fb654e"}
      display={"flex"}
      minWidth={"100vh"}
      minHeight={"100vh"}
      flexDirection={"column"}
    >
      <NavBar />
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
