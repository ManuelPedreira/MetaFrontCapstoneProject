import Input from "../../../ui/Input";
import { ReservationDetailsText, ReservationInfoText } from "./ReservationScreen2.styled";

type ReservationScreen2Props = {
  date: Date;
  guest: number;
  zone: string;
};

const ReservationScreen2 = ({ date, guest, zone }: ReservationScreen2Props) => {
  return (
    <>
      <ReservationDetailsText style={{ gridArea: "details" }}>
        15:00
        <br />
        {date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        <br /> {`${guest} people, ${zone} seating`}
      </ReservationDetailsText>
      <Input label="Name *" id="nameInput" gridArea="name" />
      <Input label="Surname *" id="surnameInput" gridArea="surname" />
      <Input label="Phone contact *" id="phoneInput" gridArea="phone" />
      <ReservationInfoText style={{ gridArea: "info" }}>
        Your table will be held for 15 minutes past your reservation time. If you are running late,
        please contact us to avoid cancellation.
      </ReservationInfoText>
    </>
  );
};

export default ReservationScreen2;
