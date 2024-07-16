import React from "react";
import {
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { Notifications, Search, Settings } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import logoImage from "../assets/logo.png";

import "../style/Navbar.css";
function Navbar() {
  return (
    <Stack padding={"20px 40px"} background={"gray.200"} spacing={"10px"}>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack flexDirection={"row"} spacing="20px" alignItems={"center"}>
          <Image src={logoImage} height={"90px"} alt="Dan Abramov" />
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search"
              borderRadius={"20px"}
              width={"400px"}
            />
          </InputGroup>
        </Stack>
        <Stack flexDirection={"row"} spacing="20px" alignItems={"center"}>
          <Notifications color="gray.300" fontSize="medium" />
          <Settings color="gray.300" fontSize="medium" />
          <Stack flexDirection={"row"} alignItems={"center"}>
            <Image
              src={logoImage}
              background={"blue.300"}
              borderRadius={"50%"}
              padding={"5px"}
              height={"50px"}
              alt="Logo Img"
            />
            <h1>Mohit Vishwkarma</h1>
            <KeyboardArrowDownIcon />
          </Stack>
        </Stack>
      </Stack>
      <Stack flexDirection={"row"} spacing={"50px"}>
        <p>Home</p>
        <p>About</p>
        <p>Work</p>
        <p>Services</p>
        <p>Products</p>
        <p>Contact Us</p>
      </Stack>
    </Stack>
  );
}

export default Navbar;
