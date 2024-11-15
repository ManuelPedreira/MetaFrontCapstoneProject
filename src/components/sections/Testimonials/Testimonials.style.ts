import styled from "styled-components";

export const TestimonialsWrapper = styled.div`
  padding: 1rem 0 3rem 0;
`;

export const TestimonialsTitle = styled.h1`
  font-family: ${({ theme }) => theme.text.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.text.subtitle.fontSize};
  color: ${({ theme }) => theme.color.primary.detail};
  margin: 1rem 0;
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;
