import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-family: "Work Sans", sans-serif;
      margin: 0;  
    }
    html, *::after, *::before {
        box-sizing: inherit;
    }
    body {
      color: ${({ theme }) => theme.colors.white};
    }
`;
