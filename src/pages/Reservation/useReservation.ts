import { useState } from "react";

type FormItemType<T> = {
  value: T;
  onChange: (value: T) => void;
  isValid?: () => boolean;
  dataList?: T[];
};

export type FormType = {
  date: FormItemType<Date>;
  guest: FormItemType<number>;
  hour: FormItemType<string>;
  zone: FormItemType<string>;
  name: FormItemType<string>;
  surname: FormItemType<string>;
  phone: FormItemType<string>;
};

const useReservation = () => {
  const getActualDate = () => {
    const now = new Date();
    now.setUTCHours(0, 0, 0, 0);
    return now;
  };

  const [formData, setFormData] = useState<FormType>({
    date: {
      value: getActualDate(),
      onChange: (newDate) => onChangeGeneric("date", newDate),
    },
    guest: {
      value: 2,
      onChange: (newGuest) => onChangeGeneric("guest", newGuest),
      isValid: (): boolean => formData.guest.value > 0,
      dataList: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    hour: {
      value: "",
      onChange: (newHour) => onChangeGeneric("hour", newHour),
      isValid: (): boolean => formData.hour.dataList?.includes(formData.hour.value) ?? false,
      dataList: ["12:00", "13:00", "14:00", "15:00"],
    },
    zone: {
      value: "Indoor",
      onChange: (newZone) => onChangeGeneric("zone", newZone),
      isValid: (): boolean => formData.zone.dataList?.includes(formData.zone.value) ?? false,
      dataList: ["Indoor", "Outdoor"],
    },
    name: {
      value: "",
      onChange: (newName) => onChangeGeneric("name", newName),
      isValid: (): boolean => formData.name.value.length > 5,
    },
    surname: {
      value: "",
      onChange: (newSurname) => onChangeGeneric("surname", newSurname),
      isValid: (): boolean => formData.surname.value.length > 5,
    },
    phone: {
      value: "",
      onChange: (newPhone) => onChangeGeneric("phone", newPhone),
      isValid: (): boolean => /^[0-9]{10}$/.test(formData.phone.value),
    },
  });

  function onChangeGeneric<T>(field: keyof FormType, newValue: T) {
    setFormData((currentState): FormType => {
      return {
        ...currentState,
        [field]: {
          ...currentState[field],
          value: newValue,
        },
      };
    });
  }

  const isFormValid = () => {
    return Object.values(formData).every((item) => (item.isValid ? item.isValid() : true));
  };

  return { formData, isFormValid };
};

/* reacFormHook */

export default useReservation;
