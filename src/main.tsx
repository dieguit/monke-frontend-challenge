import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./views/Home/Home.tsx";
import Inventory from "./views/Inventory/Inventory.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Analysis from "./views/Analysis/Analysis.tsx";
import NoMatch from "./views/NoMatch/NoMatch.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/analysis/:modelName",
        element: <Analysis />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
