import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Notifications,
  Search,
  Settings,
  Menu,
  Close,
  Home,
} from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import logoImage from "../assets/logo.png";

import "../style/Navbar.css";
import { useMediaQuery } from "@mui/material";
import MenuItem from "./MenuItem";
function Navbar() {
  const isSmall = useMediaQuery("(max-width:950px)");
  const isMobileScreen = useMediaQuery("(max-width:500px)");
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  window.addEventListener("scroll", () => {
    setScrollHeight(document.querySelector("html").scrollTop);
  });

  return (
    <Stack
      className="transition-smoth"
      padding={scrollHeight > 100 ? "5px 40px" : "20px 40px"}
      background={"gray.200"}
      width={"100%"}
      spacing={"10px"}
    >
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack flexDirection={"row"} spacing="20px" alignItems={"center"}>
          <Image src={logoImage} height={"90px"} alt="Dan Abramov" />
          {!isMobileScreen && (
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search"
                borderRadius={"20px"}
                width={!isSmall ? "400px" : "80%"}
              />
            </InputGroup>
          )}
        </Stack>
        <Stack flexDirection={"row"} spacing="20px" alignItems={"center"}>
          <Notifications className="menu-icon" />
          <Settings className="menu-icon" />
          {isMobileScreen && (
            <Box onClick={() => setToggleSearch(!toggleSearch)}>
              <Search className="menu-icon" />
            </Box>
          )}
          {isSmall && (
            <Box onClick={() => setHidden(false)}>
              <Menu className="menu-icon" {...getButtonProps()} />
            </Box>
          )}
          {!isSmall && (
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
          )}
        </Stack>
      </Stack>
      {!isSmall && (
        <Stack
          flexDirection={"row"}
          spacing={"5px"}
          overflow={"hidden"}
          sx={{
            padding: scrollHeight > 100 ? "0px" : "2px",
            height: scrollHeight > 100 ? "0px" : "fit-content",
          }}
          className="transition-smoth"
        >
          <p className="menu-item">
            <span className="menu-item-link" data-hover="Home">
              Home
            </span>
          </p>
          <p className="menu-item">
            <span className="menu-item-link" data-hover="About">
              About
            </span>
          </p>
          <p className="menu-item">
            <span className="menu-item-link" data-hover="Work">
              Work
            </span>
          </p>
          <p className="menu-item">
            <span className="menu-item-link" data-hover="Services">
              Services
            </span>
          </p>
          <p className="menu-item">
            <span className="menu-item-link" data-hover="Products">
              Products
            </span>
          </p>
          <p className="menu-item">
            <span className="menu-item-link" data-hover="Contact Us">
              Contact Us
            </span>
          </p>
        </Stack>
      )}

      {toggleSearch && isMobileScreen && (
        <div className="search-input">
          <Input
            type="text"
            placeholder="Search"
            borderRadius={"20px"}
            width={"90%"}
          />
        </div>
      )}

      {/* Sidebar */}
      {isSmall && (
        <motion.div
          {...getDisclosureProps()}
          hidden={hidden}
          initial={false}
          animate={{ width: !hidden ? (isMobileScreen ? "80%" : "50%") : 0 }}
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            position: "absolute",
            right: "0",
            height: "100vh",
            top: "0",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: "5px",
              width: "100%",
              top: "5px",
            }}
            onClick={() => setHidden(true)}
          >
            <Close className="menu-icon close-menu" />
          </Box>
          <Stack
            backgroundColor={"gray.400"}
            alignItems={"center"}
            padding={"10px"}
            spacing={"15px"}
            width="100%"
          >
            <Image
              src={logoImage}
              background={"blue.300"}
              borderRadius={"50%"}
              padding={"5px"}
              height={"90px"}
              alt="Logo Img"
            />
            <Heading size={"md"}>Mohit Vishwkarma</Heading>
            <Stack flexDirection={"row"} spacing={"20px"} width={"100%"}>
              <Button
                colorScheme="blackAlpha"
                borderRadius={"20px"}
                width={"50%"}
                variant="ghost"
              >
                Profile
              </Button>
              <Button
                colorScheme="blackAlpha"
                borderRadius={"20px"}
                width={"50%"}
                variant="ghost"
              >
                Logout
              </Button>
            </Stack>
          </Stack>
          <Stack gap={"10px"} padding={"10px"}>
            <MenuItem icon={<Home sx={{ fontSize: "2rem" }} />} label="Home" />
          </Stack>
        </motion.div>
      )}
    </Stack>
  );
}

export default Navbar;
