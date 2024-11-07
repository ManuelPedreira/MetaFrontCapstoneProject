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
import useIsPhone from "../../components/hooks/useIsPhone";

export type ReservationPageOptions = "first" | "last";

const ReservationPage = () => {
  const [reservationPage, setReservationPage] = useState<ReservationPageOptions>("first");
  const { isPhone } = useIsPhone();

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
        {reservationPage === "last" && isPhone ? (
          <BackButtonWrapper>
            <BackButton onClick={() => setReservationPage("first")} />
          </BackButtonWrapper>
        ) : null}
        <HeaderImage src={reservationPage === "first" || !isPhone ? headerImage1 : headerImage2} />

        <StyledSection reservationPage={reservationPage}>
          <SectionTittle>
            {reservationPage === "first" ? "Reserve a table" : "Details"}
          </SectionTittle>
          <ReservationScreen1
            enabledScreen={reservationPage === "first"}
            isPhone={isPhone}
            date={date}
            onDateChange={(newDate) => setDate(newDate)}
            guest={guest}
            onGuestChange={(newGuest) => setGuest(newGuest)}
            zone={zone}
            onZoneChange={(newZone) => setZone(newZone)}
          />

          <ReservationScreen2
            enabledScreen={reservationPage === "last"}
            isPhone={isPhone}
            date={date}
            guest={guest}
            zone={zone}
          />
          {isPhone && reservationPage === "first" ? (
            <StyledButton onClick={() => setReservationPage("last")}>Continue</StyledButton>
          ) : (
            <StyledButton onClick={() => {}}>Send Reservation</StyledButton>
          )}
        </StyledSection>
      </ReservationWrapper>
      <StyledFooter />
    </>
  );
};

export default ReservationPage;
