import {
  Box,
  Stack,
  Typography,
  Container,
  Divider,
  SelectChangeEvent,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import darkMode from "../assets/darkMode.svg";
import lightMode from "../assets/lightMode.svg";

interface HeaderProps {
  mode: string;
  handleChange: any;
}

const Header: FunctionComponent<HeaderProps> = ({
  mode,
  handleChange,
}: HeaderProps) => {
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} px={6} py={2}>
        <Typography>Online IDE</Typography>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              objectFit: "contain",
            }}
            onClick={handleChange}
          >
            <img
              src={mode === "dark" ? lightMode : darkMode}
              alt=""
              width={"24px"}
              height={"24px"}
              style={{
                cursor: "pointer",
              }}
            />
          </Box>
        </Stack>
      </Stack>
      <Divider
        sx={{
          borderColor: mode === "dark" ? "#fff" : null,
        }}
      />
    </>
  );
};

export default Header;
