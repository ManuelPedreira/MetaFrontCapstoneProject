import styled from "styled-components";
import Label from "../Label";

type SelectStyledProps = {
  $isError: boolean;
};

export const SelectWrapper = styled.div`
  width: 100%;
`;

export const StyledSelect = styled.select<SelectStyledProps>`
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.color.highlight.primary};
  border: 1px solid
    ${({ theme, $isError }) => ($isError ? theme.color.primary.error : theme.color.primary.detail)};
  border-radius: ${({ theme }) => theme.radiuses.medium};
  padding: 0.3rem 1rem;
  font-family: ${({ theme }) => theme.text.card.fontFamily};
  font-size: ${({ theme }) => theme.text.card.textFontSize};
  cursor: pointer;
  transition: all 0.2s linear;

  &:focus-visible {
    outline: 2px solid
      ${({ theme, $isError }) =>
        $isError ? theme.color.primary.error : theme.color.secondary.main};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.highlight.middle};
    color: ${({ theme }) => theme.color.highlight.secondary};
  }
`;

export const StyledLabel = styled(Label)`
  margin: 0 1rem;
  font-weight: bold;
  width: 100%;
`;
