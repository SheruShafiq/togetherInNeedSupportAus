import { Box, Typography } from "@mui/material";

import NavBar from "../components/NavBar";

function About() {
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
          This is the about page!
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
