import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import languageOptions from "./languageOptions";

interface LanguageSelectorProps {}

const LanguageSelector: FunctionComponent<LanguageSelectorProps> = () => {
  const [lang, setLang] = useState("nodejs");

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          px: 6,
          py: 2,
        }}
      >
        <Stack direction={"row"} columnGap={2}>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Language</InputLabel>
            <Select value={lang} label="Language" onChange={handleChange}>
              {languageOptions.map((l, index) => {
                return (
                  <MenuItem key={index} value={l.id}>
                    {l.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <Divider />
    </>
  );
};

export default LanguageSelector;

//   sx={{
//     color: "#fff",
//     ".MuiOutlinedInput-notchedOutline": {
//       borderColor: "#fff",
//     },
//     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//       borderColor: "#fff",
//     },
//     "&:hover .MuiOutlinedInput-notchedOutline": {
//       borderColor: "#fff",
//     },
//     ".MuiSvgIcon-root ": {
//       fill: "white !important",
//     },
//   }}
