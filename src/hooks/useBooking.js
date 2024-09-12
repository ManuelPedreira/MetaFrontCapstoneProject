import { useCallback, useEffect, useReducer, useState } from "react";
import { fetchAllAPI, fetchAPI, submitAPI } from "../API/API";

const reducer = (previousState, action) => {
  switch (action.type) {
    case "initializeHours": {
      return action.payload;
    }
    case "removeTime":
      return previousState.filter((value) => value !== action.payload);
    default:
      return previousState;
  }
};

const useBooking = () => {
  const [date, setDate] = useState(() => {
    const now = new Date();
    now.setUTCHours(0, 0, 0, 0);
    return now;
  });
  const [storedData, setStoredData] = useState([]);
  const [availableTimes, dispatch] = useReducer(reducer, []);

  const updateTimes = useCallback(async (formData) => {
    dispatch({ type: "removeTime", payload: formData.time });
    return await submitAPI(formData);
  }, []);

  const initializeTimes = useCallback(async (date) => {
    try {
      const payload = await fetchAPI(date);
      dispatch({ type: "initializeHours", payload });
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  }, []);

  useEffect(() => {
    fetchAllAPI().then((data) => setStoredData(data));
  }, [availableTimes]);

  useEffect(() => {
    initializeTimes(date);
  }, [date, initializeTimes]);

  return { availableTimes, updateTimes, date, setDate, storedData };
};

export default useBooking;
