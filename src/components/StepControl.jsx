import { Add, Delete } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  TextField,
} from "@mui/material";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

export const StepControl = ({ error, helperText }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });
  return (
    <section className="grid gap-1 md:col-span-2">
      <h3 className="text-sm font-semibold text-slate-500">Steps</h3>
      <FormControl
        className="grid gap-2 py-2 overflow-y-auto max-h-40"
        error={error ? error.length > 0 : false}
      >
        {fields.map((item, index) => (
          <div key={item.id}>
            <div className="flex items-center pt-2">
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={`Step ${index + 1}`}
                    variant="outlined"
                    fullWidth
                  />
                )}
                name={`steps[${index}].step`}
                control={control}
                defaultValue={item.step}
              />

              <IconButton
                color="secondary"
                onClick={() => remove(index)}
                disabled={fields.length === 1}
              >
                <Delete />
              </IconButton>
            </div>
            <FormHelperText>
              {helperText[index] !== undefined
                ? helperText[index]["step"]["message"]
                : ""}
            </FormHelperText>
          </div>
        ))}
      </FormControl>
      <Button
        sx={{
          width: "fit-content",
          height: "fit-content",
          padding: "0.25rem 0.5rem",
          fontSize: "0.75rem",
        }}
        className="justify-self-end"
        type="button"
        variant="contained"
        color="secondary"
        startIcon={<Add />}
        size="small"
        onClick={() => append({ step: "" })}
      >
        Add Step
      </Button>
    </section>
  );
};
