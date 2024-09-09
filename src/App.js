import "./App.css";
import { useBooking } from "./api/BookingProvider";
import BookingForm from "./components/BookingForm";

import {useEffect, useState } from "react";

function App() {
  const { bookingList, saveBooking, getHours } = useBooking();
  const [date, setDate] = useState(()=> {
    const actualDate = new Date();
    actualDate.setUTCHours(0,0,0,0);
    return actualDate;
  });
  const [hours, setHours] = useState();

  const bookTable = (formData) => {
    saveBooking(formData);
  };

  useEffect(() => {
    getHours(date).then((newHours) => setHours(newHours));
  }, [date, getHours]);

  return (
    <>
      <BookingForm
        availableTimes={hours}
        bookTable={bookTable}
        date={date}
        onDateChange={setDate}
      />
      {
        <ul>
          {bookingList.map((reservation, index) => (
            <li key={index}>{`${reservation.date.toISOString().split("T")[0]} at ${
              reservation.time
            } for ${reservation.guests} guests. ${reservation.occasion}`}</li>
          ))}
        </ul>
      }
    </>
  );
}

export default App;
