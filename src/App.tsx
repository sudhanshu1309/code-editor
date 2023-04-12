import { FunctionComponent } from "react";
import background from "./assets/bg.png";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface AppProps {}

const StyledTextField = styled(TextField)({
  fontFamily: "JetBrains Mono",
  background: "#ffffff",
  opacity: 0.7,
  borderRadius: "8px",
  "&:hover": {},
});

const StyledTypography = styled(Typography)({
  fontFamily: "JetBrains Mono",
  cursor: "pointer",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "15px",
  textDecorationLine: "underline",
  color: "#ffffff",
});

const StyledButton = styled(Button)({
  fontFamily: "JetBrains Mono",
  background: "#192434",
  maxWidth: "fit-content",

  "&:hover": {
    background: "#192434",
  },
});

const App: FunctionComponent<AppProps> = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            pt: 20,
            color: "#fff",
          }}
        >
          <Stack
            direction={"column"}
            alignItems={"flex-start"}
            maxWidth={"440px"}
            mx={"auto"}
            rowGap={2}
          >
            <Typography
              fontFamily="JetBrains Mono"
              fontStyle="normal"
              fontWeight="700"
              fontSize="1rem"
              lineHeight="20px"
              textAlign="center"
              letterSpacing="0.145em"
              textTransform="uppercase"
            >
              Username
            </Typography>
            <StyledTextField variant="outlined" fullWidth />
            <Typography
              fontFamily="JetBrains Mono"
              fontStyle="normal"
              fontWeight="700"
              fontSize="1rem"
              lineHeight="20px"
              textAlign="center"
              letterSpacing="0.145em"
              textTransform="uppercase"
            >
              Password
            </Typography>
            <StyledTextField variant="outlined" fullWidth />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <StyledTypography>Forgot password?</StyledTypography>
              <StyledTypography>Sign up</StyledTypography>
            </Stack>
          </Stack>
          <Stack
            alignItems={"center"}
            direction={"column"}
            mt={6}
            mx={"auto"}
            rowGap={4}
          >
            <StyledButton variant="contained" size="large">
              Login
            </StyledButton>
            <StyledButton
              variant="contained"
              onClick={() => {
                navigate("/editor", { replace: false });
              }}
            >
              Continue without login
            </StyledButton>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default App;
