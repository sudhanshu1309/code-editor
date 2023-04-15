import CodeEditor from "@monaco-editor/react";
import { Box } from "@mui/material";
import { FunctionComponent, useState } from "react";

interface CodeEditorWindowProps {
  lang: string;
  code: string;
  onChange: (key: any, value: any) => void;
}

const CodeEditorWindow: FunctionComponent<CodeEditorWindowProps> = ({
  onChange,
  lang,
  code,
}) => {
  const [value, setValue] = useState("");

  const handleEditorChange = (value: string) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <>
      <Box
        sx={{
          width: "50%",
          mt: 2,
        }}
      >
        <CodeEditor
          height="85vh"
          width={`100%`}
          language={lang}
          value={code}
          // theme={theme}
          defaultValue="// type your code here..."
          onChange={handleEditorChange}
        />
      </Box>
    </>
  );
};

export default CodeEditorWindow;
