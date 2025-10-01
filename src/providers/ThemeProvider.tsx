import { createContext, useContext, useEffect, useState } from "react";
import type { ThemeType } from "../model";

const ThemeContext = createContext<ThemeType | null>(null);
const ThemeSetterContext = createContext<React.Dispatch<
  React.SetStateAction<ThemeType>
> | null>(null);

export function useThemeContext() {
  const obj = useContext(ThemeContext);
  if (obj == null) throw new Error("Bad ThemeContext");
  return obj;
}

export function useThemeSetterContext() {
  const obj = useContext(ThemeSetterContext);
  if (obj == null) throw new Error("Bad ThemeSetterContext");
  return obj;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("system");
  // const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    if (theme === "system") {
      document.body.removeAttribute("data-theme");
    } else {
      document.body.setAttribute("data-theme", theme);
    }

    logColorScheme();
  }, [theme]);

  return (
    <>
      <ThemeContext value={theme}>
        <ThemeSetterContext value={setTheme}>
          {/*  */}
          {children}
        </ThemeSetterContext>
      </ThemeContext>
    </>
  );
}

function logColorScheme() {
  const t1 = window
    .getComputedStyle(document.body)
    .getPropertyValue("color-scheme");

  console.log(t1);
}
