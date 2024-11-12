import Calendar from "../../../ui/Calendar";
import Select from "../../../ui/Select";
import GridItemWrapper from "../../../ui/GridItemWrapper";
import { StyledRadioSelection } from "./ReservationScreeen1.styled";
import { FormType } from "../useReservation";

type ReservationScreen1Props = {
  formData: FormType;
  isPhone?: boolean;
  enabledScreen?: boolean;
};

const ReservationScreen1 = ({
  formData,
  isPhone = false,
  enabledScreen = true,
}: ReservationScreen1Props) => {
  return (
    <>
      <GridItemWrapper visible={enabledScreen || !isPhone} gridArea="calendar">
        <Calendar value={formData.date.value} onChange={formData.date.onChange} />
      </GridItemWrapper>
      <GridItemWrapper visible={enabledScreen || !isPhone} gridArea="people">
        <Select
          label="People"
          optionList={
            formData.guest.dataList?.map((guestNumber) => ({
              value: `${guestNumber}`,
              text: `${guestNumber} People`,
            })) ?? []
          }
          value={formData.guest.value.toString()}
          onChange={({ target }) => formData.guest.onChange(Number(target.value))}
        />
      </GridItemWrapper>
      <GridItemWrapper visible={enabledScreen || !isPhone} gridArea="hour">
        <Select
          label="Hour"
          optionList={[
            { value: "", text: "Select" },
            ...(formData.hour.dataList?.map((hour) => ({ value: hour, text: hour })) ?? []),
          ]}
          arialLabel="Select"
          value={formData.hour.value}
          onChange={({ target }) => formData.hour.onChange(target.value)}
        />
      </GridItemWrapper>

      {enabledScreen || !isPhone ? (
        <StyledRadioSelection
          label="Zone"
          groupId="zone"
          optionList={
            formData.zone.dataList?.map((zoneValue) => ({
              text: zoneValue,
              value: zoneValue,
            })) ?? []
          }
          value={formData.zone.value}
          onChange={formData.zone.onChange}
        />
      ) : null}
    </>
  );
};

export default ReservationScreen1;
