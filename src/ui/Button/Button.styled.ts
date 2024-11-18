import styled from "styled-components";

type StyleButtonProp ={
  $loading : boolean;
}

export const ButtonWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const StyledButton = styled.input<StyleButtonProp>`
  padding: 0.3rem;
  text-align: center;
  transition: all 0.2s linear;
  padding: 0.6rem 2rem;
  border: 0;
  width: 100%;

  font-family: ${({ theme }) => theme.text.navigationBar.fontFamily};
  font-size: ${({ theme }) => theme.text.navigationBar.fontSize};
  font-weight: ${({ theme }) => theme.text.navigationBar.fontWeight};

  border-radius: ${({ theme }) => theme.radiuses.medium};
  background-color: ${({ theme }) => theme.color.primary.detail};
  color: ${({ theme, $loading }) => $loading? "transparent" : theme.color.highlight.primary};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.secondary.main};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.primary.detailSoft};
    cursor: pointer;
  }

  &:active {
    background-color: ${({ theme }) => theme.color.primary.detailStrong};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.highlight.middle};
    color: ${({ theme }) => theme.color.highlight.secondary};
  }
`;

export const StyledSpinner = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
