import { Box, Typography } from "@mui/material";

function NoMatch() {
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
          You are deffo not a huge chatting person, cuz das a typo in the URL
          buddy.
        </Typography>
      </Box>
    </Box>
  );
}

export default NoMatch;
