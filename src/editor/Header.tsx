import { Box, Stack, Typography, Divider } from "@mui/material";
import { FunctionComponent } from "react";
import darkMode from "../assets/darkMode.svg";
// import lightMode from "../assets/lightMode.svg";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
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
          >
            <img
              src={darkMode}
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
      <Divider />
    </>
  );
};

export default Header;
