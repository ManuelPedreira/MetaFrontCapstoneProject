import { Link } from "react-router-dom";
import "./ConfirmedBooking.css"

const ConfirmedBooking = () => {
  return (
    <div class="confirm">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your reservation.</p>
      <p>We look forward to seeing you!</p>
      <Link to="/">
        <button aria-label="On Click">Accept</button>
      </Link>
    </div>
  );
};

export default ConfirmedBooking;
