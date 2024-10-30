import styled from "styled-components";
import SectionWrapper from "../../ui/SectionWrapper";
import Button from "../../ui/Button/Button";

export const ReservationWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: calc(100vh - 54px);

  @media (min-width: ${({ theme }) => theme.frames.resolution.phoneBreak.minWidth}) {
  }
`;

export const StyledSection = styled(SectionWrapper)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

export const HeaderImage = styled.img`
  aspect-ratio: 16/9;
  width: 100%;
  object-fit: cover;
  object-position: center 52%;
`;

export const BackButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.highlight.secondary};
`;

export const SectionTittle = styled.h1`
  font-family: ${({ theme }) => theme.text.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.text.subtitle.fontSize};
  font-weight: initial;
  line-height: 2rem;
  color: ${({ theme }) => theme.color.primary.main};
  width: 100%;
  margin: 0;
`;

export const ReservationText = styled.p`
  font-family: ${({ theme }) => theme.text.card.fontFamily};
  font-size: ${({ theme }) => theme.text.card.textFontSize};
  line-height: ${({ theme }) => theme.text.card.lineHeight};
  color: ${({ theme }) => theme.color.highlight.primary};
  margin: 0 1rem;
`;

export const PeopleHourWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const ReservationDetailsText = styled.p`
  font-family: ${({ theme }) => theme.text.normal.fontFamily};
  font-size: ${({ theme }) => theme.text.normal.fontSize.small};
  color: ${({ theme }) => theme.color.highlight.primary};
  margin: 5px 0;
  text-align: center;
`;

export const ReservationInfoText = styled.span`
  font-family: ${({ theme }) => theme.text.card.fontFamily};
  font-size: ${({ theme }) => theme.text.normal.fontSize.extraSmall};
  color: ${({ theme }) => theme.color.primary.main};
  font-weight: 500;
  text-align: center;
`;
