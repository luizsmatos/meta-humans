import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

:root {
  --white: #FFFFFF;

  --gray-100: #e1e1e6;
  --gray-300: #a8a8b3;
  --gray-800: #29292e;
  --gray-850: #1f2729;
  --gray-900: #121214;

  --yellow-500: #eba417;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
  

body {
  color: var(--white);
}

body, input, textarea, select, button {
  font: 400 1rem 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
