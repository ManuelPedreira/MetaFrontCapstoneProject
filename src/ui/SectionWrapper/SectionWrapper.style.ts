import styled from "styled-components";

type WrapperContainerProps = {
  $background?: boolean;
};

export const WrapperContainer = styled.section<WrapperContainerProps>`
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.frames.section.padding};

  color: ${({ $background, theme }) =>
    $background ? theme.color.highlight.secondary : theme.color.highlight.primary};

  background-color: ${({ $background, theme }) =>
    $background ? theme.color.primary.main : "transparent"};

  > * {
    margin: 0 auto;
    max-width: ${({ theme }) => theme.frames.resolution.desktop};
  }

  @media (max-width: ${({ theme }) => theme.frames.resolution.phoneBreak.maxWidth}) {
    padding: ${({ theme }) => theme.frames.section.paddingMobile};
  }
`;
