import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/jetbrains-mono";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Editor from "./editor/Editor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
