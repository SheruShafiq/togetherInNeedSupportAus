import { Box, Button, Typography } from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      bgcolor={"#fb654e"}
      display={"flex"}
      justifyContent={"center"}
      minWidth={"100vh"}
      minHeight={"100vh"}
      flexDirection={"column"}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={5}
        my={"1rem"}
        alignSelf={"center"}
      >
        <Button variant="contained" onClick={() => navigate("/about")}>
          About
        </Button>
        <Button variant="contained" onClick={() => navigate("/contact")}>
          Contact
        </Button>
        <Button variant="contained" onClick={() => navigate("/services")}>
          Services
        </Button>
      </Box>
      <Box alignSelf={"center"}>
        <Box id="gif" textAlign={"center"}>
          <iframe
            src="https://giphy.com/embed/f7b9ltJ4FrhnsKjYx2"
            width="960"
            height="540"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/tlceurope-f7b9ltJ4FrhnsKjYx2"></a>
          </p>
        </Box>
        <Typography
          color={"white"}
          fontFamily={"HiddenCocktails"}
          textAlign={"center"}
          variant="h1"
        >
          Together In Need is under construction at the moment!
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
