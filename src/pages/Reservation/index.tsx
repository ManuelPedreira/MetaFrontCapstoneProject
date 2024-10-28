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
            <div>
              <input type="radio" name="zone" value="indoor" id="indoor" />
              <ReservationZoneLabel htmlFor="indoor">Indoor</ReservationZoneLabel>
            </div>
            <div>
              <input type="radio" name="zone" value="outdoor" id="outdoor" />
              <ReservationZoneLabel htmlFor="outdoor">Outdoor</ReservationZoneLabel>
            </div>
          </ZoneSection>
          <ReservationButton>Continue</ReservationButton>
        </ReservationSection>
      </ReservationWrapper>

      <SectionWrapper>
        <button>Back</button>
        <h1>Details</h1>
        <p>Thursday, 29th August 2024</p>
        <p>2 people, outdoor seating</p>
        <label>
          Name *<input></input>
        </label>
        <label>
          Surname *<input></input>
        </label>
        <label>
          Phone contact *<input></input>
        </label>
        <p>
          Your table will be held for 15 minutes past your reservation time. If you are running
          late, please contact us to avoid cancellation
        </p>
        <Button>Send Reservation</Button>
      </SectionWrapper>
      <Footer />
    </>
  );
};

export default ReservationPage;
