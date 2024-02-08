import { Box, Stack, Typography } from "@mui/material";

import NavBar from "../components/NavBar";

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
      <Stack alignSelf={"center"} display={"flex"}>
        <Typography
          color={"white"}
          fontFamily={"HiddenCocktails"}
          textAlign={"center"}
          variant="h1"
        >
          This is the Contact page!
        </Typography>
      </Stack>
    </Box>
  );
}

export default Contact;
