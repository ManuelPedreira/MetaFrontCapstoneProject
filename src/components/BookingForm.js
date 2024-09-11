import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, bookTable, date, onDateChange }) => {
  const [time, setTime] = useState(availableTimes && availableTimes[0] ? availableTimes[0] : "");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    bookTable({
      date,
      time,
      guests,
      occasion,
    }).then((response) => {
      if (response) navigate("/confirm");
    });
  };

  useEffect(() => {
    setTime(availableTimes && availableTimes[0] ? availableTimes[0] : "");
  }, [availableTimes]);

  return (
    <form onSubmit={onSubmit} aria-label="Booking Form for Table Reservation">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        min={new Date().toISOString().split("T")[0]}
        value={date.toISOString().split("T")[0]}
        onChange={({ target }) => onDateChange(new Date(target.value))}
        aria-label="Available booking dates"
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={({ target }) => setTime(target.value)}
        aria-label="Available booking times"
      >
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
        value={1 > Number(guests) ? 1 : Number(guests) > 10 ? 10 : Number(guests)}
        onChange={({ target }) => setGuests(target.value)}
        aria-label="Select number of guests"
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={({ target }) => setOccasion(target.value)}
        aria-label="Select occasion"
      >
        <option value="" style={{color:"#666"}}>Select</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <button type="submit" disabled={!availableTimes?.length} aria-label="On Click">
        Make Your reservation
      </button>
    </form>
  );
};

export default BookingForm;
