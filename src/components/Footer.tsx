import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/logo.png";

function Footer() {
  return (
    <Box
      bgcolor={"#F4F4F4"}
      height={"20rem"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      gap={10}
      mt={"5rem"}
    >
      <Stack width={"20rem"}>
        <Box
          component="img"
          sx={{
            height: "120px",
            width: "180px",
          }}
          alt="Employment ready skills training"
          src={Logo}
        />
        <Typography mt={"2rem"} fontSize={"0.8rem"}>
          Together in Need Support Services Australia acknowledges and pays
          respect to the past, present and future Traditional Custodians and
          Elders of this nation and the continuation of cultural, spiritual and
          educational practices of Aboriginal and Torres Strait Islander
          peoples.
        </Typography>
      </Stack>
      <Stack>
        <Typography fontSize={"1rem"} fontWeight={"700"} mt={"6.8rem"}>
          Useful links
        </Typography>
        <Typography fontSize={"0.8rem"}>Privacy Policy</Typography>
        <Typography fontSize={"0.8rem"}>Terms and Conditions</Typography>
        <Typography fontSize={"0.8rem"}>Refund Policy</Typography>
      </Stack>
      <Stack>
        <Typography fontSize={"1rem"} fontWeight={"700"} mt={"6.8rem"}>
          Contact us
        </Typography>
        <Typography fontSize={"0.8rem"}>
          1234 Street Name, City Name, Australia
        </Typography>
        <Typography fontSize={"0.8rem"}>1800 123 456</Typography>
        <Typography fontSize={"0.8rem"}> 12333XYZ </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
