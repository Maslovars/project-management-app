import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'Heebo';
src: url('../assets/Heebo-VariableFont_wght.ttf');
font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Heebo', sans-serif;
}


html {
  font-size: 10px;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}
`;