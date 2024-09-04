import "./App.css";
import BookingForm from "./components/BookingForm";
import { useReducer } from "react";

const initializeTimes = () => {
  return {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };
};

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
  const [state, dispatch] = useReducer(reducer, {}, initializeTimes);

  const updateTimes = (selectedTime) => {
    dispatch({ type: "removeTime", payload: selectedTime });
  };

  return <BookingForm availableTimes={state.availableTimes} bookTable={updateTimes} />;
}

export default App;
