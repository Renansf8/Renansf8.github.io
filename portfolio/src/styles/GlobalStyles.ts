import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #1F1F1F;
    color: #fff;
  }

  border-style, input, textarea, select, button, h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', serif;
  }

  a, button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
