import { Button, TextField } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { TagControl } from "../components/TagControl";
import { StepControl } from "../components/StepControl";
import { IssueTypeControl } from "../components/IssueTypeControl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { saveFields } from "../redux/form";
import { useNavigate } from "react-router";
const FORM_NAMES = {
  FULL_NAME: "fullName",
  EMAIL: "email",
  ISSUE_TYPE: "issueType",
  TAGS: "tags",
  STEPS: "steps",
};

const SupportRequest = () => {
  const schema = z.object({
    [FORM_NAMES.FULL_NAME]: z
      .string()
      .min(2, { message: "Full Name must be greater than 2" })
      .max(25, { message: "Full Name cannot exceed 50 characters" }),
    [FORM_NAMES.EMAIL]: z.string().email("Invalid email address"),
    [FORM_NAMES.ISSUE_TYPE]: z.string("Choose at least one issue").default(""),
    [FORM_NAMES.TAGS]: z
      .array(z.string())
      .nonempty({ message: "Tags cannot be empty" })
      .default([]),
    [FORM_NAMES.STEPS]: z
      .array(
        z.object({
          step: z.string().nonempty("Step cannot be empty"),
        })
      )
      .min(1, "At least one step is required"),
  });

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      tags: [],
      steps: [{ step: "" }],
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      saveFields({
        ...data,
      })
    );
    navigate("/sucess");
  };
  return (
    <main className="grid w-screen min-h-screen gap-5 pb-4 overflow-y-scroll place-content-center bg-slate-100">
      <h1 className="pt-4 text-2xl font-bold text-center drop-shadow">
        Support Request
      </h1>
      <FormProvider {...methods}>
        <form
          className="grid max-w-md gap-3 p-8 shadow-xl md:grid-cols-2 rounded-2xl bg-slate-50"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <TextField
            label="Full Name"
            {...methods.register(...[FORM_NAMES.FULL_NAME])}
            error={!!methods.formState.errors[FORM_NAMES.FULL_NAME]}
            helperText={
              methods.formState.errors.fullName
                ? methods.formState.errors.fullName.message
                : ""
            }
            variant="outlined"
            required={true}
          />
          <TextField
            label="Email"
            {...methods.register(...[FORM_NAMES.EMAIL])}
            error={!!methods.formState.errors[FORM_NAMES.EMAIL]}
            helperText={
              methods.formState.errors.email
                ? methods.formState.errors.email.message
                : ""
            }
            variant="outlined"
            required={true}
          />
          <IssueTypeControl
            register={methods.register}
            error={!!methods.formState.errors[FORM_NAMES.ISSUE_TYPE]}
            helperText={
              methods.formState.errors.issueType
                ? methods.formState.errors.issueType.message
                : ""
            }
          />
          <TagControl
            register={methods.register}
            error={!!methods.formState.errors[FORM_NAMES.TAGS]}
            helperText={
              methods.formState.errors.tags
                ? methods.formState.errors.tags.message
                : ""
            }
          />
          <StepControl
            register={methods.register}
            error={methods.formState.errors.steps}
            helperText={
              methods.formState.errors.steps
                ? methods.formState.errors.steps
                : ""
            }
          />
          <Button
            sx={{
              marginTop: "1rem",
            }}
            className="mt-6 w-fit justify-self-center drop-shadow md:col-span-2"
            type="submit"
            size="large"
            variant="contained"
            color="primary"
          >
            SUBMIT
          </Button>
        </form>
      </FormProvider>
    </main>
  );
};
export default SupportRequest;
