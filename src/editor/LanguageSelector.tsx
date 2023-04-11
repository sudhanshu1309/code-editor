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

interface LanguageSelectorProps {
  mode: string;
}

// const styles = (theme: any) => ({
//   select: {
//     "&:before": {
//       borderColor: '#fff',
//     },
//     "&:after": {
//       borderColor: '#fff',
//     },
//   },
//   icon: {
//     fill: '#fff',
//   },
// });

const LanguageSelector: FunctionComponent<LanguageSelectorProps> = ({
  mode,
}: LanguageSelectorProps) => {
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
        <Stack
          direction={"row"}
          columnGap={2}
          sx={{
            color: mode === "dark" ? "#fff" : "#000",
          }}
        >
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: mode === "dark" ? "#fff" : "#000",
              }}
            >
              Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label="Language"
              onChange={handleChange}
              sx={{
                color: mode === "dark" ? "#fff" : "#000",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: mode === "dark" ? "#fff" : "#000",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: mode === "dark" ? "#fff" : "#000",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: mode === "dark" ? "#fff" : "#000",
                },
                ".MuiSvgIcon-root ": {
                  fill: "white !important",
                },
              }}
            >
              {languageOptions.map((l, index) => {
                return (
                  <MenuItem key={index} value={l.id}>
                    {l.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {/* <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="demo-simple-select-label">Version</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label="Version"
              onChange={handleChange}
            >
              {languageOptions.map((l, index) => {
                return (
                  <MenuItem key={index} value={l.id}>
                    {l.versions}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl> */}
        </Stack>
      </Box>
      <Divider
        sx={{
          borderColor: mode === "dark" ? "#fff" : null,
        }}
      />
    </>
  );
};

export default LanguageSelector;
