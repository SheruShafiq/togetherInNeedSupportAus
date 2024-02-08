import { Box, Stack, Typography } from "@mui/material";

import CustomButton from "./CustomButton";
import DayProgam from "../assets/Day-Program.png";
import Inclusive from "../assets/Inclusive School Holiday Programs - image.png";
import SupportCoordination from "../assets/Support-Coordination.png";
import SupportWork from "../assets/supportWork.png";
import devLearning from "../assets/Play-based-developmental-learning-1.png";
import employmentLvl from "../assets/Employment-ready-skills-training.png";

function ServicesM() {
  return (
    <Stack
      alignSelf={"center"}
      gap={20}
      mt={"15rem"}
      position={"relative"}
      ml={"5rem"}
    >
      <Stack mt={"-15rem"} justifyContent={"center"}>
        <Box
          component="img"
          id="grow"
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
          id="grow"
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
      <Stack mt={"0rem"} justifyContent={"center"} width={"210px"}>
        <Box
          component="img"
          id="grow"
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

      <Stack justifyContent={"center"} width={"220px"} mt="-8rem">
        <Box
          component="img"
          id="grow"
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
          ml={"-3rem"}
          mt={"1rem"}
        >
          Play-Based Developmental Learning
        </Typography>
      </Stack>

      <Stack justifyContent={"center"} width={"220px"} mt="-8rem">
        <Box
          component="img"
          id="grow"
          sx={{
            height: "280px",
            width: "340px",
            right: "5rem",
            zIndex: 0,
            bottom: "-40px",
          }}
          position={"relative"}
          alt="Inclusive School Holiday Programs"
          src={Inclusive}
        />
        <CustomButton />
        <Typography
          fontSize={"2rem"}
          fontFamily="Gloria Hallelujah"
          textAlign={"center"}
          ml={"-3rem"}
          mt={"1rem"}
        >
          Inclusive School Holiday Programs
        </Typography>
      </Stack>
      <Stack justifyContent={"center"} width={"220px"} mt="-8rem">
        <Box
          component="img"
          id="grow"
          sx={{
            height: "280px",
            width: "340px",
            right: "5rem",
            zIndex: 0,
            bottom: "-40px",
          }}
          position={"relative"}
          alt="Employment ready skills training"
          src={employmentLvl}
        />
        <CustomButton />
        <Typography
          fontSize={"2rem"}
          fontFamily="Gloria Hallelujah"
          textAlign={"center"}
          ml={"-3rem"}
          mt={"1rem"}
        >
          Employment Ready Skills Training
        </Typography>
      </Stack>
    </Stack>
  );
}

export default ServicesM;
