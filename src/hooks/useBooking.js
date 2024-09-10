import { useCallback, useEffect, useReducer, useState } from "react";
import { fetchAllAPI, fetchAPI, submitAPI } from "../components/API";

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

const useBooking = () => {
  const [date, setDate] = useState(() => {
    const now = new Date();
    now.setUTCHours(0, 0, 0, 0);
    return now;
  });
  const [storedData, setStoredData] = useState([]);

  const [state, dispatch] = useReducer(reducer, { availableTimes: [] });

  const updateTimes = useCallback(async (formData) => {
    dispatch({ type: "removeTime", payload: formData.time });
    return await submitAPI(formData);
  }, []);

  const initializeTimes = useCallback(async (date) => {
    try {
      const payload = await fetchAPI(date);
      dispatch({ type: "initializeHours", payload });
      loadData();
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  }, []);

  const loadData = () => {
    fetchAllAPI().then((data) => setStoredData(data));
  };

  useEffect(() => {
    initializeTimes(date);
  }, [date, initializeTimes]);

  return { state, updateTimes, date, setDate, storedData };
};

export default useBooking;
