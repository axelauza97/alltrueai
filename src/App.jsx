import { Button } from "@mui/material";
import "./App.css";
import { TextField } from "@mui/material";
import { TagControl } from "./components/TagControl";
import { IssueTypeControl } from "./components/IssueTypeControl";
import { StepControl } from "./components/StepControl";

function App() {
  return (
    <>
      <main className="grid w-screen overflow-y-scroll place-content-center gap-5 pb-4 bg-slate-100 min-h-screen">
        <h1 className="font-bold text-center text-2xl pt-4 drop-shadow">
          Support Request
        </h1>
        <form className="grid md:grid-cols-2 gap-3 max-w-md shadow-xl rounded-2xl bg-slate-50 p-8">
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            required={true}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required={true}
          />
          <IssueTypeControl />
          <TagControl />
          <StepControl />
          <Button
            className="w-fit justify-self-center drop-shadow md:col-span-2"
            type="button"
            size="large"
            variant="contained"
            color="primary"
          >
            SUBMIT
          </Button>
        </form>
      </main>
    </>
  );
}

export default App;
