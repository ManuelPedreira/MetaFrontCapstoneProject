import styled from "styled-components";

type WrapperContainerProps = {
  $background?: boolean;
};

export const WrapperContainer = styled.section<WrapperContainerProps>`
  width: 100%;
  padding: 0 2rem;

  ${({ $background }) => $background && "color:#eee"};
  background-color: ${({ $background }) => ($background ? "#495e57" : "transparent")};
  box-sizing: border-box;

  > * {
    margin: 0 auto;
    max-width: 1000px;
  }

  h1 {
    ${({ $background }) => $background && "color:#f4cf14"};
  }
  h3 {
    ${({ $background }) => !$background && "color:#495e57"};
  }
`;
