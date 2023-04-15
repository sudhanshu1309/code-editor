import {
  Box,
  Container,
  Paper,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { FunctionComponent, SetStateAction, useState } from "react";
import Header from "./Header";
import LanguageSelector from "./LanguageSelector";
import EditorWindow from "./CodeEditorWindow";

interface EditorProps {}

const Editor: FunctionComponent<EditorProps> = () => {
  const [code, setCode] = useState("");
  const [lang, setLang] = useState("nodejs");
  const [output, setOutput] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };

  const onChange = (action: any, data: SetStateAction<string>) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const body = {
    language: lang,
    version: "latest",
    code: code,
    input: null,
  };

  const handleClick = async () => {
    try {
      const res = await fetch(
        "https://online-code-compiler.p.rapidapi.com/v1/",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
            "X-RapidAPI-Host": import.meta.env.VITE_X_RapidAPI_Host,
          },
          body: JSON.stringify(body),
        }
      );
      const data = await res.json();
      console.log(data.output); // Need to delete this
      setOutput(data.output);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Header />
          <LanguageSelector
            lang={lang}
            handleChange={handleChange}
            handleClick={handleClick}
          />
          <Stack direction={"row"}>
            <EditorWindow lang={lang} code={code} onChange={onChange} />
            <Stack mx={2} alignItems={"center"} width={"50%"}>
              <Typography textAlign={"center"} fontWeight={700} mb={3} mt={2}>
                Output
              </Typography>
              {output && (
                <Paper
                  sx={{ width: "100%", mt: 2, p: 2, height: "fit-content" }}
                >
                  <Typography
                    textAlign={"left"}
                    style={{
                      whiteSpace: "pre-line",
                    }}
                  >
                    {output}
                  </Typography>
                </Paper>
              )}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Editor;
