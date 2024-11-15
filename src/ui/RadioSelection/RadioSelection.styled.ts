import styled from "styled-components";
import Label from "../Label";

export const RadioSelectionWrapper = styled.div`
  display: flex;
  flex-shrink: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 0.5rem 0 0;
  box-sizing: border-box;
  gap:1rem;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledRadio = styled.input`
  border: 1px solid ${({ theme }) => theme.color.highlight.primary};
  width: 1.15rem;
  height: 1.15rem;
  appearance: none;
  border-radius: 50%;
  transform: translateY(-0.075rem);
  display: grid;
  place-content: center;

  &:before {
    content: "";
    transform: scale(0);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1rem 1rem ${({ theme }) => theme.color.primary.main};
  }

  &:checked::before {
    transform: scale(1);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.secondary.main};
  }
`;

export const StyledLabel = styled(Label)`
  margin: 0 1rem;
  font-weight: bold;
  width: 100%;
`;