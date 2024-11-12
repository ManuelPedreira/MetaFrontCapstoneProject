import Input from "../../../ui/Input";
import GridItemWrapper from "../../../ui/GridItemWrapper";
import { ReservationDetailsText, ReservationInfoText } from "./ReservationScreen2.styled";
import { FormType } from "../useReservation";

type ReservationScreen2Props = {
  formData: FormType;
  isPhone?: boolean;
  enabledScreen?: boolean;
};

const ReservationScreen2 = ({
  formData,
  isPhone = false,
  enabledScreen = true,
}: ReservationScreen2Props) => {
  return (
    <>
      {enabledScreen && isPhone ? (
        <ReservationDetailsText>
          15:00
          <br />
          {formData.date.value.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          <br /> {`${formData.guest.value} people, ${formData.zone.value} seating`}
        </ReservationDetailsText>
      ) : null}
      <GridItemWrapper
        visible={enabledScreen || !isPhone}
        gridArea="name"
        children={Input({
          label: "Name *",
          id: "nameInput",
          value: formData.name.value,
          onChange: ({ target }) => formData.name.onChange(target.value),
        })}
      />
      <GridItemWrapper
        visible={enabledScreen || !isPhone}
        gridArea="surname"
        children={Input({
          label: "Surname *",
          id: "surnameInput",
          value: formData.surname.value,
          onChange: ({ target }) => formData.surname.onChange(target.value),
        })}
      />
      <GridItemWrapper
        visible={enabledScreen || !isPhone}
        gridArea="phone"
        children={Input({
          label: "Phone contact *",
          id: "phoneInput",
          value: formData.phone.value,
          onChange: ({ target }) => formData.phone.onChange(target.value),
        })}
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
