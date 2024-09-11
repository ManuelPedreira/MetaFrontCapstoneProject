import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BookingForm from "./components/BookingForm";
import useBooking from "./hooks/useBooking";
import ConfirmedBooking from "./components/ConfirmedBooking";
import ResultTable from "./components/ResultTable";

function App() {
  const { state, updateTimes, date, setDate, storedData } = useBooking();

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
