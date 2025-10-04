import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import StateProvider from "./providers/ArrProvider";

import "./index.css";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <StateProvider>
        <App />
      </StateProvider>
    </ThemeProvider>
  </StrictMode>,
);
