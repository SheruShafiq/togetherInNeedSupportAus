import "../pageStyles/Home.css";

import { Box, Typography } from "@mui/material";

import AnimatedShip from "../components/AnimatedShip";
import Bubbles from "../components/Bubbles";
import Footer from "../components/Footer";
import GIF from "../assets/bac.gif";
import NavBar from "../components/NavBar";
import React from "react";
import ServicesComponent from "../components/ServicesComponent";
import ServicesM from "../components/ServicesComponentM";
import { useEffect } from "react";
import useResizeHandler from "../hooks/useResizeHandler";

function Home() {
  const size = useResizeHandler();
  const [mobile, setMobile] = React.useState(true);

  useEffect(() => {
    if (size.width <= 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [size]);

  return (
    <Box
      display={"flex"}
      minWidth={"100vh"}
      minHeight={"100vh"}
      flexDirection={"column"}
    >
      {mobile ? null : <NavBar />}
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
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        py={"5rem"}
      >
        <Typography textAlign={"center"} maxWidth={"70%"}>
          Welcome to Together in Need Support Services Australia, your trusted
          partner in providing specialized support and care for individuals with
          autism and a wide range of intellectual disabilities. We are a
          dedicated disability support agency committed to enhancing the lives
          of those we serve by offering a holistic and person-centered approach
          to care. Our team is passionate about making a positive impact in the
          lives of our clients and their families. We take pride in offering a
          wide array of services tailored to meet the diverse needs of the
          individuals we support.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        flexDirection={"column"}
        alignSelf={"center"}
        alignItems={"center"}
      >
        <Box position={"absolute"} zIndex={1} mt={10}>
          <h3 className="animate-charcter">Our Services</h3>
        </Box>
        <AnimatedShip />
      </Box>
      {mobile ? <ServicesM /> : <ServicesComponent />}
      <Bubbles />
      <Footer />
      <footer
        style={{
          backgroundColor: "#1876D1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <p
          style={{
            color: "#ffff",
            fontFamily: "Gloria Hallelujah",
            fontSize: "1.5rem",
          }}
        >
          Copyright © 2023 togetherinneedsupport
        </p>
      </footer>
    </Box>
  );
}

export default Home;
