import styled from "styled-components";

export const TestimonialsTitle = styled.h1`
  font-family: ${({ theme }) => theme.text.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.text.subtitle.fontSize};
  color: ${({ theme }) => theme.color.primary.detail};
  margin: 1rem 0;
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  gap: 2rem;
`;
