import { useState } from "react";
import NavBar from "../../components/NavBar";
import { ScrollRestoration } from "react-router-dom";
import {
  BackButtonWrapper,
  HeaderImage,
  ReservationWrapper,
  SectionTittle,
  StyledButton,
  StyledFooter,
  StyledSection,
} from "./Reservation.styled";
import ReservationScreen1 from "./ReservationScreen1";
import ReservationScreen2 from "./ReservationScreen2";
import headerImage1 from "/images/restauranfood.jpg";
import headerImage2 from "/images/fish.jpg";
import BackButton from "../../ui/BackButton";

const ReservationPage = () => {
  const [isConfirmationPage, setIsConfirmationPage] = useState<boolean>(false);

  const [date, setDate] = useState(() => {
    const now = new Date();
    now.setUTCHours(0, 0, 0, 0);
    return now;
  });
  const [guest, setGuest] = useState(2);
  const [zone, setZone] = useState("indoor");

  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <ReservationWrapper>
        {isConfirmationPage && (
          <BackButtonWrapper>
            <BackButton onClick={() => setIsConfirmationPage(false)} />
          </BackButtonWrapper>
        )}
        <HeaderImage src={!isConfirmationPage ? headerImage1 : headerImage2} />

        <StyledSection $visible={isConfirmationPage ? "last" : "first"}>
          <SectionTittle>{!isConfirmationPage ? "Reserve a table" : "Details"}</SectionTittle>
          {!isConfirmationPage && (
            <ReservationScreen1
              date={date}
              onDateChange={(newDate) => setDate(newDate)}
              guest={guest}
              onGuestChange={(newGuest) => setGuest(newGuest)}
              zone={zone}
              onZoneChange={(newZone) => setZone(newZone)}
            />
          )}
          {isConfirmationPage && <ReservationScreen2 date={date} guest={guest} zone={zone} />}
          <StyledButton gridArea="button" onClick={() => setIsConfirmationPage(true)}>
            {isConfirmationPage ? "Send Reservation" : "Continue"}
          </StyledButton>
        </StyledSection>
      </ReservationWrapper>
      <StyledFooter />
    </>
  );
};

export default ReservationPage;
