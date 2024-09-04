import { useEffect, useState } from "react";

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join(
    "-"
  );
}

const BookingForm = ({ availableTimes, bookTable }) => {
  const [date, setDate] = useState(formatDate(new Date(Date.now())));
  const [time, setTime] = useState(availableTimes && availableTimes[0] ? availableTimes[0] : "");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");

  const onSubmit = (event) => {
    event.preventDefault();
    bookTable(time);
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
        value={date}
        onChange={({ target }) => setDate(target.value)}
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
        onChange={({ target }) => setGuests(target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={({ target }) => setOccasion(target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
