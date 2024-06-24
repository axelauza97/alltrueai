import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { MenuProps, tags } from "../utils/Constants";

export const TagControl = ({ error, helperText }) => {
  const { control } = useFormContext();
  return (
    <FormControl className="max-w-full" error={error}>
      <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
      <Controller
        name="tags"
        control={control}
        defaultValue={[]}
        inputProps={{ "data-testid": "tag" }}
        render={({ field }) => (
          <Select
            labelId="demo-multiple-checkbox-label"
            multiple
            value={field.value}
            onChange={field.onChange}
            input={<OutlinedInput label="Tag" />}
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
                <Checkbox checked={field.value.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
