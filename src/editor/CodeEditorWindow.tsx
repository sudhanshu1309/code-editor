import CodeEditor from "@monaco-editor/react";
import { Box } from "@mui/material";
import { FunctionComponent, useState } from "react";

interface CodeEditorWindowProps {}

const CodeEditorWindow: FunctionComponent<CodeEditorWindowProps> = () => {
  const [code, setCode] = useState("");

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
          language={"javascript"}
          value={code}
          // theme={theme}
          defaultValue="// type your code..."
          // onChange={handleEditorChange}
        />
      </Box>
    </>
  );
};

export default CodeEditorWindow;
