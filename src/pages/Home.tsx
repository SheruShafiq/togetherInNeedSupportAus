import "../pageStyles/Home.css";

import { Box, Stack, Typography } from "@mui/material";

import AnimatedShip from "../components/AnimatedShip";
import CustomButton from "../components/CustomButton";
import DayProgam from "../assets/Day-Program.png";
import GIF from "../assets/bac.gif";
import NavBar from "../components/NavBar";
import SupportCoordination from "../assets/Support-Coordination.png";
import SupportWork from "../assets/supportWork.png";
import devLearning from "../assets/Play-based-developmental-learning-1.png";

function Home() {
  return (
    <Box
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
      <Stack alignSelf={"center"} gap={10} mt={"15rem"}>
        <Box display={"flex"} gap={20} alignSelf={"center"}>
          <Stack mt={"-15rem"} justifyContent={"center"}>
            <Box
              component="img"
              sx={{
                height: "240px",
                width: "240px",
                bottom: "-35px",
                zIndex: 0,
              }}
              position={"relative"}
              alt="Day Programs"
              src={DayProgam}
            />
            <CustomButton />
            <Typography
              fontSize={"2rem"}
              mt={"1rem"}
              ml={"-1rem"}
              fontFamily="Gloria Hallelujah"
            >
              Day Programs
            </Typography>
          </Stack>

          <Stack mt={"-8rem"} justifyContent={"center"} width={"210px"}>
            <Box
              component="img"
              sx={{
                height: "240px",
                width: "340px",
                bottom: "-35px",
                right: "80px",
                zIndex: 0,
              }}
              position={"relative"}
              alt="Support Work"
              src={SupportWork}
            />
            <CustomButton />
            <Typography
              fontSize={"2rem"}
              mt={"1rem"}
              ml={"-1rem"}
              fontFamily="Gloria Hallelujah"
              width={"100%"}
            >
              Support Work
            </Typography>
          </Stack>
          <Stack mt={"-8rem"} justifyContent={"center"} width={"220px"}>
            <Box
              component="img"
              sx={{
                height: "160px",
                width: "240px",
                bottom: "35px",
                right: "40px",
                zIndex: 0,
              }}
              position={"relative"}
              alt="Support Coordination"
              src={SupportCoordination}
            />
            <CustomButton />
            <Typography
              fontSize={"2rem"}
              mt={"1rem"}
              ml={"-1rem"}
              fontFamily="Gloria Hallelujah"
              textAlign={"center"}
            >
              Support Coordination
            </Typography>
          </Stack>
        </Box>
        <Box display={"flex"} gap={40}>
          <Stack justifyContent={"center"} width={"220px"} mt="-5rem">
            <Box
              component="img"
              sx={{
                height: "280px",
                width: "340px",
                right: "5rem",
                zIndex: 0,
                bottom: "-40px",
              }}
              position={"relative"}
              alt="Play-Based Developmental Learning"
              src={devLearning}
            />
            <CustomButton />
            <Typography
              fontSize={"2rem"}
              fontFamily="Gloria Hallelujah"
              textAlign={"center"}
            >
              Play-Based Developmental Learning
            </Typography>
          </Stack>
          <CustomButton />
          <CustomButton />
        </Box>
      </Stack>
    </Box>
  );
}

export default Home;
