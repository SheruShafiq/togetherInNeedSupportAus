import "../pageStyles/Home.css";

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
        justifyContent={"flex-start"}
        flexDirection={"column"}
        style={{
          backgroundImage: `url(${GIF})`, // Set the GIF as the background image
          backgroundSize: "cover", // Cover the entire Box area
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        id="bg"
        p={10}
      >
        <h3 className="animate-charcter">
          Empowering Lives,
          <br />
          Embracing All Abilities.
        </h3>

        <Typography
          maxWidth={"60%"}
          variant="h5"
          fontWeight={"100"}
          component="p"
          textAlign={"left"}
          color={"#ffffff"}
          fontFamily="Gloria Hallelujah"
        >
          Empowering individuals with disabilities to thrive and achieve their
          full potential through compassionate care and comprehensive support
          services.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
