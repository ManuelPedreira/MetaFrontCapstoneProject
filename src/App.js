import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BookingForm from "./components/BookingForm";
import useBooking from "./hooks/useBooking";
import ConfirmedBooking from "./components/ConfirmedBooking";
import ResultTable from "./components/ResultTable";

function App() {
  const { availableTimes, updateTimes, date, setDate, storedData } = useBooking();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BookingForm
                availableTimes={availableTimes}
                bookTable={updateTimes}
                date={date}
                onDateChange={setDate}
              />
              {storedData && <ResultTable storedData={storedData} />}
            </>
          }
        />
        <Route path="/confirm" element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
