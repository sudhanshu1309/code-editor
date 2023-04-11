import { Box, Container, SelectChangeEvent } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Header from "./Header";
import LanguageSelector from "./LanguageSelector";

interface EditorProps {}

const Editor: FunctionComponent<EditorProps> = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: mode === "dark" ? "#1E1E1E" : "#fff",
          color: mode === "dark" ? "#fff" : "#000",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="xl">
          <Header mode={mode} handleChange={toggleMode} />
          <LanguageSelector mode={mode} />
        </Container>
      </Box>
    </>
  );
};

export default Editor;
