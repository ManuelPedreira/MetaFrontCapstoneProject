import "./App.css";
import BookingForm from "./components/BookingForm";
import { fetchAPI, submitAPI } from "./components/API";
import { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "initializeHours": {
      return {
        availableTimes: action.payload,
      };
    }
    case "removeTime":
      return {
        availableTimes: state.availableTimes.filter((value) => value !== action.payload),
      };
    default:
      return state;
  }
};

function App() {
  const [date, setDate] = useState(new Date());
  const [state, dispatch] = useReducer(reducer, { availableTimes: [] });

  const updateTimes = async (formData) => {
    dispatch({ type: "removeTime", payload: formData.time });
    return await submitAPI(formData);
  };

  const initializeTimes = async () => {
    try {
      const payload = await fetchAPI(date);
      dispatch({ type: "initializeHours", payload });
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  useEffect(() => {
    initializeTimes();
  }, [date]);

  return (
    <BookingForm
      availableTimes={state.availableTimes}
      bookTable={updateTimes}
      date={date}
      onDateChange={setDate}
    />
  );
}

export default App;
