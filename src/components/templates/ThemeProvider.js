import theme from "@styles/theme";
import { createContext, useState, useContext, useCallback } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [ThemeMode, setThemeMode] = useState("offModal");
  const themeObject = ThemeMode === "onModal" ? theme.onModal : theme.offModal;

  return (
    <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { ThemeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (ThemeMode === "onModal") {
      setThemeMode("offModal");
    } else {
      setThemeMode("onModal");
    }
  }, [ThemeMode]);

  return [ThemeMode, toggleTheme];
}

export { ThemeProvider, useTheme };
