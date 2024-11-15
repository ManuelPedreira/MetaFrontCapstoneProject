import { useLocation } from "react-router-dom";
import { getRoute } from "../../types/routesList";
import InfoPage from "../../components/InfoPage";
import { FormType } from "../../types/FormType";

const toUpperCase = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const ReservationConfirmPage = () => {
  const location = useLocation();
  const reservation: FormType = location.state.reservation;

  const { zone, guest, hour } = reservation;
  const name = toUpperCase(reservation.name);
  const surname = toUpperCase(reservation.surname);
  const date = reservation.date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <InfoPage
      title="Your reservation has been successfully registered!"
      button="Return to Homepage"
      buttonTo={getRoute("Home")}
    >
      Thank you for your reservation,{" "}
      <strong>
        {name} {surname}
      </strong>
      ! <br />
      We're excited to welcome you. Here's what you need to know:
      <br />
      <br />
      Your table for {guest} guests is reserved in the <strong>{zone}</strong> area on{" "}
      <strong>{date}</strong>, at <strong>{hour}</strong>.
    </InfoPage>
  );
};

export default ReservationConfirmPage;
