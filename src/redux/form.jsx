import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    fields: {
      fullName: "",
      email: "",
      issueType: "",
      tags: [],
      steps: [],
    },
    errors: {},
  },
  reducers: {
    saveFields: (state, action) => {
      const values = action.payload;
      state.fields = { ...state.fields, ...values };
    },
    updateField: (state, action) => {
      const { fieldName, value } = action.payload;
      state.fields[fieldName] = value;
    },
    setFormError: (state, action) => {
      const { fieldName, error } = action.payload;
      state.errors[fieldName] = error;
    },
    clearFormErrors: (state) => {
      state.errors = {};
    },
  },
});

export const { saveFields, updateField, setFormError, clearFormErrors } =
  formSlice.actions;
export default formSlice.reducer;
