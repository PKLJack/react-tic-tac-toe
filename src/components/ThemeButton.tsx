import type { ThemeType } from "../model";
import {
  useThemeContext,
  useThemeSetterContext,
} from "../providers/ThemeProvider";

const themeArr: ThemeType[] = ["system", "light", "dark"];

export default function ThemeButton() {
  const theme = useThemeContext();
  const themeSetter = useThemeSetterContext();

  const options = themeArr.map((v) => (
    <option key={v} value={v}>
      {v.toUpperCase()}
    </option>
  ));

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    themeSetter(e.target.value as ThemeType);
  }

  return (
    <>
      <div className="theme-select">
        <span>Theme: </span>
        <select value={theme} onChange={handleChange}>
          {options}
        </select>
      </div>
    </>
  );
}
