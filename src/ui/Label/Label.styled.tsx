import styled from "styled-components";

export const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme.text.card.fontFamily};
  font-size: ${({ theme }) => theme.text.card.textFontSize};
  line-height: ${({ theme }) => theme.text.card.lineHeight};
  color: ${({ theme }) => theme.color.highlight.primary};
`;
