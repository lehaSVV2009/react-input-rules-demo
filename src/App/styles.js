import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }
`;

export const defaultTheme = {
  colors: {
    red: "#ff4c6a",
    gray: "#dadfe6",
    darkGray: "#6c757d",
    lightGray: "#f6f6f6",
    white: "#ffffff"
  },
  breakpoints: {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px"
  }
};
