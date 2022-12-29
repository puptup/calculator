import GlobalStyle from "./globalStyle";
import themes from "./themes";

const themeByType = {
  dark: themes.darkTheme,
  ligth: themes.lighTheme,
};

export type ThemeType = keyof typeof themeByType;

export { GlobalStyle, themeByType };
