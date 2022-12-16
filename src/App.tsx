import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./pages/dashboard";
import ErrorPage from "./pages/errorPage";
import Global from "./styles/global";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },

]);


function App() {
  return (
    <div className='App'>
      <Global />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
