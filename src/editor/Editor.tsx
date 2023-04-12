import { Box, Container, Stack } from "@mui/material";
import { FunctionComponent } from "react";
import Header from "./Header";
import LanguageSelector from "./LanguageSelector";
import EditorWindow from "./CodeEditorWindow";

interface EditorProps {}

const Editor: FunctionComponent<EditorProps> = () => {
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Header />
          <LanguageSelector />
          <Stack direction={"row"}>
            <EditorWindow />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Editor;
