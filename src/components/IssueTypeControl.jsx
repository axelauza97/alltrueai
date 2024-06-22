import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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
export const IssueTypeControl = () => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Issue Type</InputLabel>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={issue}
        label="Issue Type"
        // onChange={handleChange}
        required={true}
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
