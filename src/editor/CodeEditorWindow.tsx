import CodeEditor from "@monaco-editor/react";
import { Box } from "@mui/material";
import { FunctionComponent, useState } from "react";

interface CodeEditorWindowProps {
  lang: string;
  code: string;
  onChange: (val: string) => void;
}

const CodeEditorWindow: FunctionComponent<CodeEditorWindowProps> = ({
  lang,
  code,
  onChange,
}) => {
  const handleEditorChange = (value: any, event: any) => {
    console.log(value);
    onChange(value);
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
