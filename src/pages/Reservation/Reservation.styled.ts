import styled from "styled-components";
import SectionWrapper from "../../ui/SectionWrapper";
import Button from "../../ui/Button/Button";

export const ReservationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`;

export const ReservationSection = styled(SectionWrapper)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderImage = styled.img`
  aspect-ratio: 16/9;
  width: 100%;
  object-fit: cover;
  object-position: center 52%;
`;

export const SectionTittle = styled.p`
  font-family: ${({ theme }) => theme.text.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.text.subtitle.fontSize};
  line-height: 2rem;
  color: ${({ theme }) => theme.color.primary.main};
  width: 100%;
  border-top: 0.5rem;
`;

export const ReservationText = styled.p`
  font-family: ${({ theme }) => theme.text.card.fontFamily};
  font-size: ${({ theme }) => theme.text.card.textFontSize};
  line-height: ${({ theme }) => theme.text.card.lineHeight};
  color: ${({ theme }) => theme.color.highlight.primary};
  margin: 0 0.5rem;
`;

export const ReservationLabel = styled(ReservationText)`
  font-weight: bold;
`;

export const PeopleHourSection = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export const PeopleHourSelect = styled.select`
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.color.highlight.primary};
  border: 1px solid ${({ theme }) => theme.color.primary.detail};
  border-radius: ${({ theme }) => theme.radiuses.medium};
  padding: 0.3rem 1rem;
  font-family: ${({ theme }) => theme.text.card.fontFamily};
  font-size: ${({ theme }) => theme.text.card.textFontSize};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.secondary.main};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.highlight.middle};
    color: ${({ theme }) => theme.color.highlight.secondary};
  }
`;

export const ZoneSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ReservationZoneLabel = styled.label`
  font-family: ${({ theme }) => theme.text.card.fontFamily};
  font-size: ${({ theme }) => theme.text.card.textFontSize};
  line-height: ${({ theme }) => theme.text.card.lineHeight};
  color: ${({ theme }) => theme.color.highlight.primary};
`;

export const ReservationButton = styled(Button)`
  width: 100%;
`;
