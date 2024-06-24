import { BrowserRouter, Routes, Route } from "react-router-dom";
import SupportRequest from "./pages/SupportRequest";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import SupportDisplay from "./pages/SupportDisplay";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<SupportRequest />} />
          <Route path="/sucess" element={<SupportDisplay />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
