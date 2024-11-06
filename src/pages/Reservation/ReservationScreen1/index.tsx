import Calendar from "../../../ui/Calendar";
import RadioSelection from "../../../ui/RadioSelection";
import Select from "../../../ui/Select";

type ReservationScreen1Props = {
  date: Date;
  onDateChange: (date: Date) => void;
  guest: number;
  onGuestChange: (guest: number) => void;
  zone: string;
  onZoneChange: (zone: string) => void;
};

const ReservationScreen1 = ({
  date,
  onDateChange,
  guest,
  onGuestChange,
  zone,
  onZoneChange,
}: ReservationScreen1Props) => {
  return (
    <>
      <Calendar value={date} onChange={(date) => onDateChange(date)} />
      <Select
        label="People"
        gridArea="people"
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
      <Select
        label="Hour"
        gridArea="hour"
        optionList={[
          { value: "", text: "Select" },
          { value: "14:30", text: "14:30" },
          { value: "15:00", text: "15:00" },
          { value: "16:00", text: "16:00" },
        ]}
        arialLabel="Select"
      />
      <RadioSelection
        label="Zone"
        gridArea="zone"
        groupId="zone"
        optionList={[
          { text: "Indoor", value: "indoor" },
          { text: "Outdoor", value: "outdoor" },
        ]}
        value={zone}
        onChange={(value) => onZoneChange(value)}
      />
    </>
  );
};

export default ReservationScreen1;
