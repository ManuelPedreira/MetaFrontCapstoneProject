import styled from "styled-components";

export const StyledButton = styled.input`
  padding: 0.3rem;
  text-align: center;
  transition: all 0.2s linear;
  padding: 0.6rem 2rem;
  border: 0;
  
  font-family: ${({ theme }) => theme.text.navigationBar.fontFamily};
  font-size: ${({ theme }) => theme.text.navigationBar.fontSize};
  font-weight: ${({ theme }) => theme.text.navigationBar.fontWeight};

  border-radius: ${({ theme }) => theme.radiuses.medium};
  background-color: ${({ theme }) => theme.color.primary.detail};
  color: ${({ theme }) => theme.color.highlight.primary};

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
