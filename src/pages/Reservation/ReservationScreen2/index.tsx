import Input from "../../../ui/Input";
import GridItemWrapper from "../../../ui/GridItemWrapper";
import { ReservationDetailsText, ReservationInfoText } from "./ReservationScreen2.styled";
import { FieldErrors, UseFormGetValues, UseFormRegister } from "react-hook-form";
import { FormData } from "..";

type ReservationScreen2Props = {
  isPhone?: boolean;
  enabledScreen?: boolean;
  register: UseFormRegister<FormData>;
  getValues: UseFormGetValues<FormData>;
  errors: FieldErrors<FormData>;
};

const ReservationScreen2 = ({
  isPhone = false,
  enabledScreen = true,
  register,
  getValues,
  errors,
}: ReservationScreen2Props) => {
  return (
    <>
      {enabledScreen && isPhone ? (
        <ReservationDetailsText>
          {getValues("hour")}
          <br />
          {getValues("date").toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          <br /> {`${getValues("guest")} people, ${getValues("zone")} seating`}
        </ReservationDetailsText>
      ) : null}
      <GridItemWrapper
        visible={enabledScreen || !isPhone}
        gridArea="name"
        children={Input({
          label: "Name",
          id: "nameInput",
          register: register("name", { required: true, minLength: 4 }),
          isError: errors.name !== undefined,
        })}
      />
      <GridItemWrapper
        visible={enabledScreen || !isPhone}
        gridArea="surname"
        children={Input({
          label: "Surname",
          id: "surnameInput",
          register: register("surname", { required: true, minLength: 4 }),
          isError: errors.surname !== undefined,
        })}
      />
      <GridItemWrapper
        visible={enabledScreen || !isPhone}
        gridArea="phone"
        children={Input({
          label: "Phone contact",
          id: "phoneInput",
          register: register("phone", { required: true, pattern: /^\+?[1-9][0-9]{7,14}$/ }),
          isError: errors.phone !== undefined,
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
