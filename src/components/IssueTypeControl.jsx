import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useFormContext } from "react-hook-form";
const ISSUES = [
  {
    id: "bug",
    text: "Bug Report",
  },
  {
    id: "feature",
    text: "Feature Request",
  },
  {
    id: "general",
    text: "General Inquiry",
  },
];
export const IssueTypeControl = ({ error }) => {
  const { register, watch } = useFormContext();
  const issueType = watch("issueType", "");

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Issue Type</InputLabel>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Issue Type"
        required={true}
        {...register("issueType")}
        error={error}
        value={issueType}
        inputProps={{ "data-testid": "issueType" }}
      >
        {ISSUES.map((issueItem) => (
          <MenuItem key={issueItem.id} value={issueItem.id}>
            {issueItem.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
