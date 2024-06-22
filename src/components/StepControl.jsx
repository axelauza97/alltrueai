import { Add, Delete } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import { Controller, useFieldArray, useForm } from "react-hook-form";

export const StepControl = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      steps: [{ step: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  return (
    <section className="grid gap-1 md:col-span-2">
      <h3 className="text-sm text-slate-500 font-semibold">Steps</h3>
      <article className="grid gap-2 max-h-40 overflow-y-auto py-2">
        {fields.map((item, index) => (
          <div key={item.id} className="flex items-center">
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
        ))}
      </article>

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
