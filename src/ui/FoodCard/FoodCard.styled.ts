import styled from "styled-components";

export const FoodCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 300px;
  
  background-color: ${({ theme }) => theme.color.background.primarySoft};
  border-radius: ${({ theme }) => theme.radiuses.medium};
  overflow: hidden;
  
  @media (min-width: ${({theme}) => theme.frames.resolution.phoneBreak.minWidth}) {
    min-width: 300px;
  }
  
  @media (min-width: calc(300px*3 + 2rem*4)) {
    max-width: 330px;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.03);
      box-shadow: 3px 3px 15px -5px ${({theme}) => theme.color.highlight.middle};
    }
  }

  * {
    font-family: ${({ theme }) => theme.text.card.fontFamily};
    font-size: ${({ theme }) => theme.text.card.headFontSize};
  }

`;

export const FoodCarPicture = styled.img`
  aspect-ratio: 4/3;
  object-fit: cover;
  object-position: center;
`;

export const FoodCardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 1rem;
`;

export const FoodCardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FoodCardTitle = styled.h3``;

export const FoodCardPrice = styled.h3`
  color: ${({ theme }) => theme.color.secondary.main};
`;

export const FoodCardDescription = styled.p`
  font-size: ${({ theme }) => theme.text.card.textFontSize};
  line-height: ${({ theme }) => theme.text.card.lineHeight};
  flex-grow: 1;
`;
