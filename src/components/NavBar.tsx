import { Icon, TextField } from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      minWidth={"100%"}
      alignSelf={"center"}
      justifyContent={"center"}
      flexGrow={"1"}
      bgcolor={"white"}
      maxHeight={"100px"}
    >
      <Box
        alignSelf={"flex-start"}
        display={"flex"}
        flexDirection={"row"}
        height={"100px"}
        mr={60}
      >
        <img src={Logo} alt="" />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        maxHeight={"2rem"}
        mt={"2rem"}
      >
        <Button variant="text" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button variant="text" onClick={() => navigate("/about")}>
          About
        </Button>
        <Button variant="text" onClick={() => navigate("/contact")}>
          Contact
        </Button>
        <Button variant="text" onClick={() => navigate("/services")}>
          Services
        </Button>
        <Box display={"flex"} alignItems={"center"}>
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            sx={{
              mb: "1rem",
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
