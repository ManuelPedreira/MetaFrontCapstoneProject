import styled from "styled-components";
import Footer from "../../components/Footer";
import Button from "../../ui/Button/Button";
import SectionWrapper from "../../ui/SectionWrapper";
import { ReservationPageOptions } from ".";
import { getGridArea } from "./components/ReservationGrids";

export const ReservationWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: calc(100vh - 54px);

  @media (min-width: ${({ theme }) => theme.frames.resolution.phoneBreak.minWidth}) {
    min-height: auto;
  }
`;

export const HeaderImage = styled.img`
  aspect-ratio: 16/9;
  width: 100%;
  object-fit: cover;
  object-position: center 52%;

  @media (min-width: ${({ theme }) => theme.frames.resolution.phoneBreak.minWidth}) {
    max-height: 400px;
  }
`;

export const SectionTittle = styled.h1`
  font-family: ${({ theme }) => theme.text.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.text.subtitle.fontSize};
  font-weight: initial;
  line-height: 2rem;
  color: ${({ theme }) => theme.color.primary.main};
  width: 100%;
  margin: 0;
  grid-area: title;
`;

type StyledSectionProps = {
  reservationPage?: ReservationPageOptions;
};

export const StyledSection = styled(SectionWrapper)<StyledSectionProps>`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  gap: 1rem;

  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 54px - (100vw * 9 / 16));
  grid-template-areas: ${({ reservationPage }) => getGridArea(reservationPage)};

  @media (min-width: ${({ theme }) => theme.frames.resolution.phoneBreak.minWidth}) {
    max-width: ${({ theme }) => theme.frames.resolution.desktop};
    margin: 3rem auto;
    gap: 1rem 2rem;

    min-height: auto;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 3rem repeat(4, auto) 1rem 4rem 4rem auto; 
    grid-template-areas: ${getGridArea("full")};
    align-items: center;
  }
`;

export const BackButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.highlight.secondary};
`;

export const StyledButton = styled(Button)`
  width: 100%;
  align-self: flex-end;
  grid-area: button;
`;

export const StyledFooter = styled(Footer)`
  @media (max-width: ${({ theme }) => theme.frames.resolution.phoneBreak.maxWidth}) {
    display: none;
  }
`;
