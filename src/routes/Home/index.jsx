import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import HeroImg from "../../assets/HeroImg2.png";
import MobileMarketing from "../../assets/MobileMarketing.png";
import HeroImg3 from "../../assets/HeroImg3.png";

function Home() {
  return (
    <div>
      <Stack
        flexDirection={"row"}
        height={"80vh"}
        padding={"4rem"}
        justify={"space-around"}
        alignItems={"center"}
      >
        <Stack gap={"3rem"} width={"40%"}>
          <Heading color={"gray"} sx={{ fontWeight: "400", fontSize: "3rem" }}>
            We{" "}
            <span style={{ color: "rgba(60,60,90,.7)", fontWeight: "600" }}>
              Design Product, Develop Platform
            </span>{" "}
            and{" "}
            <span style={{ color: "rgba(60,60,90,.7)", fontWeight: "600" }}>
              Deliver Experiences
            </span>{" "}
            <span
              style={{
                color: "#3E98FC",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              Globally.
            </span>
          </Heading>
          <Stack flexDirection={"row"} gap={"2rem"}>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <img
                src={MobileMarketing}
                width={"100px"}
                alt="mobile marketing"
              />
              <Heading size={"md"} sx={{ fontWeight: "400" }}>
                Mobile Apps
              </Heading>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <img src={HeroImg3} width={"100px"} alt="mobile marketing" />
              <Heading size={"md"} sx={{ fontWeight: "400" }}>
                Website Development
              </Heading>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <img src={HeroImg} width={"100px"} alt="mobile marketing" />
              <Heading size={"md"} sx={{ fontWeight: "400" }}>
                Enterprice Software
              </Heading>
            </Stack>
          </Stack>
        </Stack>
        <img src={HeroImg} style={{ width: "45%" }} alt="Hero img" />
      </Stack>
    </div>
  );
}

export default Home;
