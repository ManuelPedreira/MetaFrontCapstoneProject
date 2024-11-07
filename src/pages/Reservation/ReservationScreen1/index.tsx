import Calendar from "../../../ui/Calendar";
import Select from "../../../ui/Select";
import GridItemWrapper from "../../../ui/GridItemWrapper";
import { StyledRadioSelection } from "./ReservationScreeen1.styled";

type ReservationScreen1Props = {
  date: Date;
  onDateChange: (date: Date) => void;
  guest: number;
  onGuestChange: (guest: number) => void;
  zone: string;
  onZoneChange: (zone: string) => void;
  isPhone?: boolean;
  enabledScreen?: boolean;
};

const ReservationScreen1 = ({
  date,
  onDateChange,
  guest,
  onGuestChange,
  zone,
  onZoneChange,
  isPhone = false,
  enabledScreen = true,
}: ReservationScreen1Props) => {
  return (
    <>
      <GridItemWrapper visible={enabledScreen || !isPhone} gridArea="calendar">
        <Calendar value={date} onChange={(date) => onDateChange(date)} />
      </GridItemWrapper>
      <GridItemWrapper visible={enabledScreen || !isPhone} gridArea="people">
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
          value={guest.toString()}
          onChange={({ target }) => onGuestChange(Number(target.value))}
        />
      </GridItemWrapper>
      <GridItemWrapper visible={enabledScreen || !isPhone} gridArea="hour">
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
      </GridItemWrapper>

      {enabledScreen || !isPhone ? (
        <StyledRadioSelection
          label="Zone"
          groupId="zone"
          optionList={[
            { text: "Indoor", value: "indoor" },
            { text: "Outdoor", value: "outdoor" },
          ]}
          value={zone}
          onChange={(value) => onZoneChange(value)}
        />
      ) : null}
    </>
  );
};

export default ReservationScreen1;
