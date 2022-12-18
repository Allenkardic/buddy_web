import React from "react";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./pages/dashboard";
import Global from "./styles/global";
import AppRoute from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
