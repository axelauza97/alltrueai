import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useState } from "react";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const tags = ["UI", "Backend", "Performance"];

export const TagControl = () => {
  const [tagName, setTagName] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTagName(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <FormControl className="max-w-full">
      <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={tagName}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {tags.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={tagName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
