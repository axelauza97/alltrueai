import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SupportRequest from "../src/pages/SupportRequest";
import { describe, expect, test } from "vitest";

const FORM_NAMES = {
  FULL_NAME: "fullName",
  EMAIL: "email",
  ISSUE_TYPE: "issueType",
  TAGS: "tags",
  STEPS: "steps",
};

const schema = z.object({
  [FORM_NAMES.FULL_NAME]: z
    .string()
    .min(2, { message: "Full Name must be greater than 2" })
    .max(25, { message: "Full Name cannot exceed 50 characters" }),
  [FORM_NAMES.EMAIL]: z.string().email("Invalid email address"),
  [FORM_NAMES.ISSUE_TYPE]: z.string().default(""),
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

const mockStore = configureStore([]);
const store = mockStore({
  form: {
    fields: {
      fullName: "",
      email: "",
      issueType: "",
      tags: [],
      steps: [],
    },
    errors: {},
  },
});

const Wrapper = ({ children }) => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      tags: [],
      steps: [{ step: "" }],
    },
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <FormProvider {...methods}>{children}</FormProvider>
      </BrowserRouter>
    </Provider>
  );
};

describe("SupportRequest Component", () => {
  test("renders all fields", () => {
    render(
      <Wrapper>
        <SupportRequest />
      </Wrapper>
    );
    expect(screen.getByText("Full Name")).toBeDefined();
    expect(screen.getByText("Email")).toBeDefined();
    expect(screen.getByText("Issue Type")).toBeDefined();
    expect(screen.getAllByText("Tag")).toBeDefined();
    expect(screen.getAllByText("Step", { exact: false })).toBeDefined();
  });

  test("show valid full name", async () => {
    const fullNameInput = await screen.findByTestId("fullName");
    fireEvent.change(fullNameInput, { target: { value: "Axel" } });
    fireEvent.blur(fullNameInput);
    expect(fullNameInput.value).toBe("Axel");
  });
  test("show invalid form", async () => {
    const fullNameInput = await screen.findByTestId("fullName");
    fireEvent.change(fullNameInput, { target: { value: "Axel" } });
    const emailInput = await screen.findByTestId("email");
    fireEvent.change(emailInput, { target: { value: "axel@gmail.com" } });
    const issueTypeInput = await screen.findByTestId("issueType");
    fireEvent.change(issueTypeInput, { target: { value: "feature" } });

    fireEvent.click(screen.getByText("SUBMIT"));
    expect(fullNameInput.value).toBe("Axel");
    expect(emailInput.value).toBe("axel@gmail.com");
  });
});
