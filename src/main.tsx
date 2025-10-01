import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import StateProvider from "./providers/ArrProvider";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </StrictMode>,
);
