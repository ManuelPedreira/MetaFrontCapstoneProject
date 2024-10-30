import { useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Calendar from "../../ui/Calendar";
import { ScrollRestoration } from "react-router-dom";
import {
  HeaderImage,
  PeopleHourWrapper,
  ReservationWrapper,
  StyledSection,
  SectionTittle,
  StyledButton,
  ReservationDetailsText,
  ReservationInfoText,
  BackButtonWrapper,
} from "./Reservation.styled";
import headerImage1 from "/images/restauranfood.jpg";
import headerImage2 from "/images/fish.jpg";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import RadioSelection from "../../ui/RadioSelection";
import BackButton from "../../ui/BackButton";

const ReservationPage = () => {
  const [date, setDate] = useState(() => {
    const now = new Date();
    now.setUTCHours(0, 0, 0, 0);
    return now;
  });
  const [guest, setGuest] = useState("2");
  const [zone, setZone] = useState("indoor");

  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <ReservationWrapper>
        <HeaderImage src={headerImage1} />
        <StyledSection>
          <SectionTittle>Reserve a table</SectionTittle>
          <Calendar value={date} onChange={(date) => setDate(date)} />
          <PeopleHourWrapper>
            <Select
              label="People"
              optionList={[
                { value: "2", text: "2 People" },
                { value: "3", text: "3 People" },
                { value: "4", text: "4 People" },
                { value: "5", text: "5 People" },
                { value: "6", text: "6 People" },
                { value: "7", text: "7 People" },
                { value: "8", text: "8 People" },
                { value: "9", text: "9 People" },
              ]}
              value={guest}
              onChange={({ target }) => setGuest(target.value)}
            />
            <Select
              label="Hour"
              optionList={[
                { value: "", text: "Select" },
                { value: "14:30", text: "14:30" },
                { value: "15:00", text: "15:00" },
                { value: "16:00", text: "16:00" },
              ]}
              arialLabel="Select"
            />
          </PeopleHourWrapper>
          <RadioSelection
            label="Zone"
            groupId="zone"
            optionList={[
              { text: "Indoor", value: "indoor" },
              { text: "Outdoor", value: "outdoor" },
            ]}
            value={zone}
            onChange={(value) => setZone(value)}
          />
          <StyledButton>Continue</StyledButton>
        </StyledSection>
      </ReservationWrapper>

      <ReservationWrapper>
        <BackButtonWrapper>
          <BackButton />
        </BackButtonWrapper>
        <HeaderImage src={headerImage2} />
        <StyledSection>
          <SectionTittle>Details</SectionTittle>
          <ReservationDetailsText>
            {date.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            <br /> {`${guest} people, ${zone} seating`}
          </ReservationDetailsText>
          <Input label="Name *" id="nameInput" />
          <Input label="Surname *" id="surnameInput" />
          <Input label="Phone contact *" id="phoneInput" />
          <ReservationInfoText>
            Your table will be held for 15 minutes past your reservation time. If you are running
            late, please contact us to avoid cancellation.
          </ReservationInfoText>
          <StyledButton>Send Reservation</StyledButton>
        </StyledSection>
      </ReservationWrapper>
      <Footer />
    </>
  );
};

export default ReservationPage;
