import { Icon, TextField } from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const handleButtonClick = (destination: string) => {
    // Step 1: Navigate to the loading screen first
    navigate("/loadingScreen");

    // Step 2: Delay navigation to the final destination
    setTimeout(() => {
      navigate(destination);
    }, 2000); // Adjust the timeout duration as needed
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      minWidth={"100%"}
      flexGrow={"1"}
      bgcolor={"white"}
      maxHeight={"130px"}
      py={"0.5rem"}
      justifyContent={"space-between"}
    >
      <Box
        alignSelf={"flex-start"}
        display={"flex"}
        flexDirection={"row"}
        height={"130px"}
        mr={60}
      >
        <img src={Logo} alt="" />
      </Box>
      <Box
        mr={"1rem"}
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        maxHeight={"2rem"}
        alignSelf={"center"}
      >
        <Button
          sx={{
            fontFamily: "Gloria Hallelujah",
            fontSize: "1rem",
          }}
          variant="text"
          onClick={() => handleButtonClick("/")}
        >
          Home
        </Button>
        <Button
          variant="text"
          sx={{
            fontFamily: "Gloria Hallelujah",
            fontSize: "1rem",
          }}
          onClick={() => handleButtonClick("/about")}
        >
          About
        </Button>
        <Button
          variant="text"
          sx={{
            fontFamily: "Gloria Hallelujah",
            fontSize: "1rem",
          }}
          onClick={() => handleButtonClick("/contact")}
        >
          Contact
        </Button>
        <Button
          variant="text"
          sx={{
            fontFamily: "Gloria Hallelujah",
            fontSize: "1rem",
          }}
          onClick={() => handleButtonClick("/services")}
        >
          Services
        </Button>
        <Box display={"flex"} alignItems={"center"}>
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            sx={{
              mb: "1rem",
              fontFamily: "Gloria Hallelujah",
              fontSize: "1rem",
              "& .MuiInputLabel-root": {
                fontFamily: "Gloria Hallelujah",
                fontSize: "1rem",
              },
            }}
          />
          <Icon color="action">
            <SearchIcon />
          </Icon>
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar;
