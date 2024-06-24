# Support Request Form in React

This project implements a "Support Request Form" using React, React Hook Form, zod for validation, Redux Toolkit for state management, and React Router for navigation.

## Objective

Create a simple yet functional support request form where users can submit their information regarding an issue or inquiry.

### Requirements

- Form Fields
  Full Name: Text input (required).

Email Address: Text input with email validation (required).

Issue Type: Dropdown menu with options like "Bug Report," "Feature Request," "General Inquiry" (required).

Tags: Multi-select option to categorize the issue (e.g., "UI," "Backend," "Performance").

Steps to Reproduce: Dynamic form field where users can add multiple steps using useFieldArray from React Hook Form (at least one step is required).

- Validation
  Use zod for schema-based validation.

Display error messages for required fields and invalid inputs.

- State Management
  Utilize Redux Toolkit to store form data upon submission.

Implement actions and reducers to manage form submission.

- User Flow
  User fills out the form and submits it.

Upon successful submission, the form data is saved to the Redux state.

Redirect to a confirmation page that displays the submitted data.

## Technical Details

- React Hook Form
  useForm: Manages overall form state.

useFieldArray: Handles dynamic fields (Steps to Reproduce).

- zod
  Defines a schema for form validation.
- Redux Toolkit
  Slice: Manages form data.

Actions/Reducers: Handles form submission.

- React Router
  Enables navigation between form page and confirmation page.

- Bonus

Styling: TailWind and MUI.

Unit Tests: Vitest.

### Webite

https://alltrueai.netlify.app/

#### Local and Test

```bash
npm run dev
npm run test
```
