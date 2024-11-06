import styled from "styled-components";

export const BackButtonContainer = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.color.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  aspect-ratio: 1;

  border-radius: 50%;
  transition: 0.2s all linear;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary.mainSoft};
    cursor: pointer;
  }

  &:active {
    background-color: ${({ theme }) => theme.color.primary.main};
  }
`;
