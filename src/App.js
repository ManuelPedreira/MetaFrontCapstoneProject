import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BookingForm from "./components/BookingForm";
import useBooking from "./hooks/useBooking";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  const { state, updateTimes, date, setDate, storedData } = useBooking();

  console.log("test")

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BookingForm
                availableTimes={state.availableTimes}
                bookTable={updateTimes}
                date={date}
                onDateChange={setDate}
              />
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Hour</th>
                    <th>Guests</th>
                    <th>Occcasion</th>
                  </tr>
                </thead>
                <tbody>
                  {storedData?.map((item, index) => (
                    <tr key={index}>
                      <th>{item.date}</th>
                      <th>{item.time}</th>
                      <th>{item.guests}</th>
                      <th>{item.occasion}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          }
        ></Route>
        <Route path="/confirm" element={<ConfirmedBooking />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
