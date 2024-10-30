import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const minWidth = ({ theme }: { theme: DefaultTheme }) =>  theme.frames.resolution.phoneBreak.minWidth;
const maxWidth = ({ theme }: { theme: DefaultTheme }) =>  theme.frames.resolution.phoneBreak.maxWidth;

export const PresentationContainer = styled.div`
  display: flex;
  padding: 1.5rem 0;

  @media (min-width: ${minWidth}) {
    position: relative;
    gap: 9rem;
  }

  @media (max-width: ${maxWidth}) {
    flex-flow: column;
    gap: 0;
  }
`;

export const ImageContainer = styled.div`
  min-width: 300px;
`;

export const StyledImage = styled.div`
  @media (min-width: ${minWidth}) {
    position: absolute;
    right: 0;
    width: 350px;
  }

  @media (max-width: ${maxWidth}) {
    margin-top: 2rem;
  }

  height: 400px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${({theme})=> theme.radiuses.medium};
`;

export const PresentationTittle = styled.h1`
  line-height: 3rem;
  margin: 0;

  font-family: ${({ theme }) => theme.text.title.fontFamily};
  font-size: ${({ theme }) => theme.text.title.fontSize};
  color: ${({ theme }) => theme.color.primary.detail};
`;

export const PresentationSubtittle = styled.h3`
  font-family: ${({ theme }) => theme.text.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.text.subtitle.fontSize};
  margin: 1rem 0;
`;

export const PresentationText = styled.p`
  font-size: ${({ theme }) => theme.text.normal.fontSize.normal};

  @media (min-width: ${minWidth}) {
    min-height: 100px;
  }
`;
