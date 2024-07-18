import { Stack } from "@chakra-ui/react";
import React from "react";

function MenuItem({ label, icon }) {
  return (
    <Stack
      flexDirection={"row"}
      padding={"10px 20px"}
      gap={"15px"}
      borderTopLeftRadius={"20px"}
      borderBottomRightRadius={"20px"}
      background={"blue.100"}
      fontSize={"1.3rem"}
    >
      {icon}
      <p>{label}</p>
    </Stack>
  );
}

export default MenuItem;
