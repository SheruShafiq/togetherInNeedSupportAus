import { Box, Typography } from "@mui/material";

import GIF from "../assets/bac.gif";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <Box
      bgcolor={"#fb654e"}
      display={"flex"}
      minWidth={"100vh"}
      minHeight={"100vh"}
      flexDirection={"column"}
    >
      <NavBar />
      <Box
        width={"100%"}
        minHeight={"40vh"} // Set a minimum height for the banner
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{
          backgroundImage: `url(${GIF})`, // Set the GIF as the background image
          backgroundSize: "cover", // Cover the entire Box area
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h2"
          fontWeight={"900"}
          component="h1"
          color={"#FFFFFF"}
          style={{ color: "#FFFFFF", textAlign: "left" }}
        >
          Empowering Lives,
          <br />
          Embracing All Abilities.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
