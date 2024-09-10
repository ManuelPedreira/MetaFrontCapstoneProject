const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const readData = (date) => {
  const storedData = JSON.parse(localStorage.getItem("BookingAPIData"));

  if (date && storedData) {
    const storedFiltratedData = storedData.filter(
      (reservation) => reservation?.date === date.toISOString().split("T")[0]
    );
    return storedFiltratedData;
  }

  return storedData;
};

const storeData = (formData) => {
  const data = readData();
  const formatFormData = { ...formData, date: formData.date.toISOString().split("T")[0] };
  const newData = data ? [...data, formatFormData] : [formatFormData];

  localStorage.setItem("BookingAPIData", JSON.stringify(newData));
};

export const fetchAPI = async function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

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

export const submitAPI = async function (formData) {
  storeData(formData);
  return true;
};

export const fetchAllAPI = async function () {
  return readData();
};
