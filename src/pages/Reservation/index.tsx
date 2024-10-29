import { useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Button from "../../ui/Button/Button";
import Calendar from "../../ui/Calendar";
import SectionWrapper from "../../ui/SectionWrapper";
import { ScrollRestoration } from "react-router-dom";
import {
  HeaderImage,
  PeopleHourSection,
  ReservationWrapper,
  ReservationSection,
  ZoneSection,
  SectionTittle,
  ReservationLabel,
  ReservationZoneLabel,
  ReservationButton,
  PeopleHourSelect,
  ZoneRadio,
  ZoneRadioWrapper,
} from "./Reservation.styled";
import headerImage from "/images/restauranfood.jpg";

const ReservationPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <ReservationWrapper>
        <HeaderImage src={headerImage} />
        <ReservationSection>
          <SectionTittle>Reserve a table</SectionTittle>
          <Calendar value={date} onChange={(date) => setDate(date)} />
          <PeopleHourSection>
            <div>
              <ReservationLabel>People</ReservationLabel>
              <PeopleHourSelect>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 People</option>
              </PeopleHourSelect>
            </div>
            <div>
              <ReservationLabel>Hour</ReservationLabel>
              <PeopleHourSelect aria-label="Select">
                <option value="">Select</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </PeopleHourSelect>
            </div>
          </PeopleHourSection>
          <ZoneSection>
            <ReservationLabel>Zone</ReservationLabel>
            <ZoneRadioWrapper>
              <ZoneRadio type="radio" name="zone" value="indoor" id="indoor" />
              <ReservationZoneLabel htmlFor="indoor">Indoor</ReservationZoneLabel>
            </ZoneRadioWrapper>
            <ZoneRadioWrapper>
              <ZoneRadio type="radio" name="zone" value="outdoor" id="outdoor" />
              <ReservationZoneLabel htmlFor="outdoor">Outdoor</ReservationZoneLabel>
            </ZoneRadioWrapper>
          </ZoneSection>
          <ReservationButton>Continue</ReservationButton>
        </ReservationSection>
      </ReservationWrapper>

      <ReservationWrapper>
        <HeaderImage src={headerImage} />
        <ReservationSection>
          <button>Back</button>
          <SectionTittle>Details</SectionTittle>
          <p>Thursday, 29th August 2024</p>
          <p>2 people, outdoor seating</p>
          <ReservationLabel>
            Name *<input></input>
          </ReservationLabel>
          <ReservationLabel>
            Surname *<input></input>
          </ReservationLabel>
          <ReservationLabel>
            Phone contact *<input></input>
          </ReservationLabel>
          <p>
            Your table will be held for 15 minutes past your reservation time. If you are running
            late, please contact us to avoid cancellation
          </p>
          <ReservationButton>Send Reservation</ReservationButton>
        </ReservationSection>
      </ReservationWrapper>
      <Footer />
    </>
  );
};

export default ReservationPage;
