import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import { MenuProps } from "../utils/Constants";

const SupportDisplay = () => {
  const { fields } = useSelector((state) => state.form);
  const steps = fields.steps.map((field) => {
    return field.step;
  });
  return (
    <main className="grid w-screen min-h-screen gap-5 pb-4 overflow-y-scroll place-content-center bg-slate-100">
      <h1 className="pt-4 text-2xl font-bold text-center text-green-400 drop-shadow">
        Success!
      </h1>
      <p className="text-center">This is the information you have provided</p>
      <section className="grid max-w-md gap-3 p-8 shadow-xl md:grid-cols-2 rounded-2xl bg-slate-50">
        <TextField
          label="Full Name"
          variant="outlined"
          defaultValue={fields.fullName}
          disabled
        />
        <TextField
          label="Email"
          variant="outlined"
          defaultValue={fields.email}
          disabled
        />
        <TextField
          label="Issue Type"
          variant="outlined"
          defaultValue={fields.issueType}
          disabled
        />
        <FormControl className="max-w-full">
          <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>

          <Select
            labelId="demo-multiple-checkbox-label"
            multiple
            disabled
            value={[...fields.tags]}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          ></Select>
        </FormControl>
        <FormControl className="grid gap-1 md:col-span-2">
          <InputLabel id="multipleSteps">Steps</InputLabel>

          <Select
            labelId="multipleSteps"
            multiple
            disabled
            value={[...steps]}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          ></Select>
        </FormControl>
      </section>
    </main>
  );
};
export default SupportDisplay;
