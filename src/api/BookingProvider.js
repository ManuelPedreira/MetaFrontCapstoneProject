import { createContext, useContext, useState } from "react";
import { fetchAPI, submitAPI } from "./API";

const bookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [bookingList, setBookingList] = useState([]);

  const saveBooking = async (formData) => {
    const response = await submitAPI(formData);

    if (response) {
      setBookingList((stored) => [...stored, formData]);
    }

    return response;
  };

  const getHours = async (date) => {
    const allHours = await fetchAPI(date);

    const bookedInDay = bookingList.filter((reserve) => reserve.date.getTime() === date.getTime());
    const bookedHoursInDay = bookedInDay.map(({ time }) => time);
    const availableHours = allHours.filter((time) => !bookedHoursInDay?.includes(time));

    return availableHours;
  };

  return (
    <bookingContext.Provider value={{ bookingList, saveBooking, getHours }}>
      {children}
    </bookingContext.Provider>
  );
};

export const useBooking = () => useContext(bookingContext);

export default BookingProvider;
