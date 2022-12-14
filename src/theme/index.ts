import { GlobalStyle } from "./globalStyle";
import { lighTheme, darkTheme } from "./themes";

const themeByType = {
  dark: darkTheme,
  ligth: lighTheme,
};

export type ThemeType = keyof typeof themeByType;

export { GlobalStyle, themeByType };
