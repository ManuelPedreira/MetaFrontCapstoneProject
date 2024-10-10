import styled from "styled-components";

export const SpecialsContainer = styled.div`
  padding-bottom: 2rem;
`;

export const SepcialsTitle = styled.h1`
  font-family: ${({ theme }) => theme.text.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.text.subtitle.fontSize};
  margin: 2rem 0;
`;

export const SpecialsCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;