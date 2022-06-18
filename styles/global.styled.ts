import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'Heebo';
font-style: normal;
src: url('/fonts/Heebo-VariableFont_wght.ttf');
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Heebo', sans-serif;
}

html {
  height: 100%;
  font-size: 10px;
}

body {
  height: 100%;
}

a {
  text-decoration: none;
  list-style: none;
}

ul {
  list-style: none;
}

::-webkit-scrollbar {
  width: 0.8rem;
}

::-webkit-scrollbar-track {
  background-color: #9b9b9b;
  border: 0.2rem solid #ffffff;
  border-radius: 0.8rem;
}

::-webkit-scrollbar-thumb {
  background-color: #ffffff;
  border: 0.2rem solid #9b9b9b;
  border-radius: 0.8rem;
}

:hover {
  transition: 0.5s;
}

#root {
  height: 100%;
}

#__next {
/*   display: flex;
  flex-direction: column;
  width: 100%; */
  height: 100%;
} 
`;
