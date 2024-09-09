import { useEffect, useState } from "react";

const BookingForm = ({ availableTimes, bookTable, date, onDateChange }) => {
  const [time, setTime] = useState(availableTimes && availableTimes[0] ? availableTimes[0] : "");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    bookTable({
      date,
      time,
      guests,
      occasion,
    });
  };

  useEffect(() => {
    setTime(availableTimes && availableTimes[0] ? availableTimes[0] : "");
  }, [availableTimes]);

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={onSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        min={new Date().toISOString().split("T")[0]}
        value={date.toISOString().split("T")[0]}
        onChange={({ target }) => onDateChange(new Date(target.value))}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={({ target }) => setTime(target.value)}>
        {availableTimes?.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={({ target }) => setGuests(Number(target.value))}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={({ target }) => setOccasion(target.value)}>
        <option selected></option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" disabled={!availableTimes?.length} />
    </form>
  );
};

export default BookingForm;
