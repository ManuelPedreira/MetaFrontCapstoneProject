import styled from "styled-components";

export const TestimonialContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background.primary};
  border-radius: ${({ theme }) => theme.radiuses.medium};
  color: ${({ theme }) => theme.color.highlight.primary};
  padding: 1rem;

`;

export const TestimonialPicture = styled.img`
  aspect-ratio: 1/1;
  height: 100px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radiuses.medium};
`;
