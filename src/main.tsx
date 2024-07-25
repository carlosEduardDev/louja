import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import { GlobalStorage } from "./store/globalStorage.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStorage>
      <Toaster />
      <RouterProvider router={router} />
    </GlobalStorage>
  </React.StrictMode>
);
