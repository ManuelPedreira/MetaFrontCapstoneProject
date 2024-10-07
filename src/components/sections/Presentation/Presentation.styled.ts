import styled from "styled-components";

export const PresentationContainer = styled.div`
  display: flex;
  padding: 2rem 0;

  @media (min-width: 750px) {
    position: relative;
    gap: 4rem;
  }

  @media (max-width: 749px) {
    flex-flow: column;
    gap: 0;
  }
`;

export const ImageContainer = styled.div`
  min-width: 350px;
`;

export const StyledImage = styled.div`
  @media (min-width: 750px) {
    position: absolute;
    right: 0;
    width: 350px;
  }

  @media (max-width: 749px) {
    margin-top: 2rem;
  }

  height: 400px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
`;

export const PresentationTittle = styled.h1`
  min-width: 18rem;
  font-size: 4rem;
  line-height: 3rem;
  margin: 0;
`;

export const PresentationSubtittle = styled.h3`
  font-size: 2.5rem;
  margin: 1rem 0;
`;

export const PresentationText = styled.p`
  font-size: 1.2rem;

  @media (min-width: 750px) {
    min-height: 7.2rem;
  }
`;
