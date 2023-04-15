import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { FunctionComponent } from "react";
import languageOptions from "./languageOptions";

interface LanguageSelectorProps {
  lang: string;
  handleChange: (e: SelectChangeEvent) => void;
  handleClick: () => void;
}

const LanguageSelector: FunctionComponent<LanguageSelectorProps> = ({
  lang,
  handleChange,
  handleClick,
}: LanguageSelectorProps) => {
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
          <Button variant="outlined" onClick={handleClick}>
            Run
          </Button>
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
