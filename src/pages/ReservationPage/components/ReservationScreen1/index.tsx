import Calendar from "../../../../ui/Calendar";
import Select from "../../../../ui/Select";
import GridItemWrapper from "../../../../ui/GridItemWrapper";
import { StyledRadioSelection } from "./ReservationScreeen1.styled";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormType } from "../../../../types/FormType";

const guestList = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type ReservationScreen1Props = {
  isPhone?: boolean;
  enabledScreen?: boolean;
  register: UseFormRegister<FormType>;
  errors?: FieldErrors<FormType>;
  calendarDefaultValue?: Date;
  validHours?: string[];
};

const ReservationScreen1 = ({
  isPhone = false,
  enabledScreen = true,
  register,
  errors,
  calendarDefaultValue,
  validHours = [],
}: ReservationScreen1Props) => {
  return (
    <>
      <GridItemWrapper visible={enabledScreen || !isPhone} gridArea="calendar">
        <Calendar register={register("date")} defaultValue={calendarDefaultValue} />
      </GridItemWrapper>
      <GridItemWrapper visible={enabledScreen || !isPhone} gridArea="people">
        <Select
          label="People"
          optionList={[
            { value: "0", text: "Select" },
            ...(guestList?.map((guestNumber) => ({
              value: `${guestNumber}`,
              text: `${guestNumber} People`,
            })) ?? []),
          ]}
          register={register("guest", { required: true, min: 1 })}
          isError={errors?.guest !== undefined}
        />
      </GridItemWrapper>
      <GridItemWrapper visible={enabledScreen || !isPhone} gridArea="hour">
        <Select
          label="Hour"
          optionList={[
            { value: "", text: "Select" },
            ...(validHours.map((hour) => ({ value: hour, text: hour })) ?? []),
          ]}
          arialLabel="Select"
          register={register("hour", { required: true })}
          isError={errors?.hour !== undefined}
        />
      </GridItemWrapper>

      {enabledScreen || !isPhone ? (
        <StyledRadioSelection
          label="Zone"
          groupId="zone"
          optionList={
            ["Indoor", "Outdoor"].map((zoneValue) => ({
              text: zoneValue,
              value: zoneValue,
            })) ?? []
          }
          register={register("zone")}
        />
      ) : null}
    </>
  );
};

export default ReservationScreen1;
