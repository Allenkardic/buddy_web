import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Global from "./styles/global";
import AppRoute from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoute />
        <Global />
      </BrowserRouter>
    </>
  );
}

export default App;
