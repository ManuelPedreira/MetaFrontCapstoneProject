import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Karla';
  src: local('Karla'), url(./fonts/Karla-VariableFont_wght.ttf) format(truetype);
}
@font-face {
  font-family: 'MarkaziText';
  src: local('MarkaziText'), url(./fonts/MarkaziText-VariableFont_wght.ttf) format(truetype);
}

#root {
  width: 100%;
  margin: 0 auto;
  color-scheme: light dark;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  font-family: Karla;
}

h1,h2,h3 {
    font-family: MarkaziText;
}

body {
  margin: 0;
  display: flex;
  min-width: 320px;
  min-height: 100vh;
  font-size: 15px;
  color: #333;
}

* {
  line-height: 1.3rem;
  letter-spacing: 0.02rem;

}

a {
  text-decoration: inherit;
}


`;

export default GlobalStyles;
