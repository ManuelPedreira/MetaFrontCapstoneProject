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
  color-scheme: normal;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}


body {
  margin: 0;
  display: flex;
  min-width: 320px;
  min-height: 100vh;
  
  font-family: ${({ theme }) => theme.text.normal.fontFamily};
  font-size: ${({ theme }) => theme.text.normal.fontSize.normal};
  color: ${({ theme }) => theme.color.highlight.primary};
}

a {
  text-decoration: inherit;

  @media (pointer: fine) {
    &:hover{
      text-decoration: underline;

      cursor: pointer;
    }
  }
}

`;

export default GlobalStyles;
