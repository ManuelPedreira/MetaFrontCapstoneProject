import Input from "../../../ui/Input";
import GridItemWrapper from "../../../ui/GridItemWrapper";
import { ReservationDetailsText, ReservationInfoText } from "./ReservationScreen2.styled";

type ReservationScreen2Props = {
  date: Date;
  guest: number;
  zone: string;
  isPhone?: boolean;
  enabledScreen?: boolean;
};

const ReservationScreen2 = ({
  date,
  guest,
  zone,
  isPhone = false,
  enabledScreen = true,
}: ReservationScreen2Props) => {
  return (
    <>
      {enabledScreen && isPhone ? (
        <ReservationDetailsText>
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
      ) : null}
      <GridItemWrapper
        visible={enabledScreen || !isPhone}
        gridArea="name"
        children={Input({ label: "Name *", id: "nameInput" })}
      />
      <GridItemWrapper
        visible={enabledScreen || !isPhone}
        gridArea="surname"
        children={Input({ label: "Surname *", id: "surnameInput" })}
      />
      <GridItemWrapper
        visible={enabledScreen || !isPhone}
        gridArea="phone"
        children={Input({ label: "Phone contact *", id: "phoneInput" })}
      />
      {enabledScreen || !isPhone ? (
        <ReservationInfoText>
          Your table will be held for 15 minutes past your reservation time. If you are running
          late, please contact us to avoid cancellation.
        </ReservationInfoText>
      ) : null}
    </>
  );
};

export default ReservationScreen2;
