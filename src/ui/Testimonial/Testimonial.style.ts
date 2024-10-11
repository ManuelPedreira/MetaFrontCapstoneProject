import styled from "styled-components";

export const TestimonialContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background.primary};
  border-radius: ${({ theme }) => theme.radiuses.medium};
  color: ${({ theme }) => theme.color.highlight.primary};
  padding: 1rem;

  display: flex;
  flex: 1 1 300px;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: calc(200px*4 + 1rem*8 + 2rem*5)) {
    flex: 0 1 200px;
  }
`;

export const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TestimonialName = styled.h6`
  margin: 0;
  font-family: ${({ theme }) => theme.text.card.fontFamily};
  font-size: ${({ theme }) => theme.text.card.headFontSize};
`;

export const TestimonialPicture = styled.img`
  aspect-ratio: 1/1;
  height: 50px;
  object-fit: cover;
  border-radius: 50px;
`;

export const TestimonialText = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.text.card.fontFamily};
  font-size: ${({ theme }) => theme.text.card.headFontSize};
`;
