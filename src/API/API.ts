const seededRandom = function (seed: number) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

type DataType = {
  time: string;
  guest: number;
  zone: string;
  name: string;
  surname: string;
  phone: string;
};

type StoredDataType = { date: string } & DataType;
type FormDataType = { date: Date } & DataType;

const readData = (date?: Date): StoredDataType[] => {
  const jsonData = localStorage.getItem("BookingAPIData");
  const storedData: StoredDataType[] = jsonData ? JSON.parse(jsonData) : [];

  if (date && storedData) {
    const storedFiltratedData = storedData.filter(
      (reservation) => reservation?.date === date.toISOString().split("T")[0]
    );
    return storedFiltratedData;
  }

  return storedData;
};

const storeData = (formData: FormDataType) => {
  const data = readData();
  const formatFormData: StoredDataType = {
    ...formData,
    date: formData.date.toISOString().split("T")[0],
  };
  const newData = data ? [...data, formatFormData] : [formatFormData];

  localStorage.setItem("BookingAPIData", JSON.stringify(newData));
};

export const fetchAPI = async function (date: Date) {
  const result = [];
  const random = seededRandom(date.getDate());

  const storedBookings = readData(date);
  const storedBookedTimes = storedBookings?.map(({ time }) => time);

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }

  return result.filter((hour) => !storedBookedTimes?.includes(hour));
};

export const submitAPI = async function (formData: FormDataType) {
/*   await new Promise((resolve) => setTimeout(resolve, 500)); */
  storeData(formData);
  console.log(formData);
  return true;
};

export const fetchAllAPI = async function () {
  return readData();
};
