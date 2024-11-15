import { FormType } from "../types/FormType";
import { fetchAPI, submitAPI } from "./API";

export const getHours = (date: Date) => {
  return fetchAPI(date);
};

export const sendReservation = (data: FormType) => {
  const { date, guest, hour, name, phone, surname, zone } = data;
  return submitAPI({
    date,
    guest,
    name,
    phone,
    surname,
    time: hour,
    zone,
  });
};
