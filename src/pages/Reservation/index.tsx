import { DateCalendar } from "@mui/x-date-pickers";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Button from "../../ui/Button/Button";
import SectionWrapper from "../../ui/SectionWrapper";

const ReservationPage = () => {
  return (
    <>
      <NavBar />
      <SectionWrapper>
        <h1>Reserve a table</h1>

        <DateCalendar disablePast={true} />

        <div>
          <div>
            <h3>People</h3>
            <select>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
              <option value="7">7 People</option>
            </select>
          </div>
          <div>
            <h3>Hour</h3>
            <select aria-label="Select">
              <option value="">Select</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
        </div>
        <div>
          <h3>Zone</h3>
          <div>
            <input type="radio" name="zone" value="indoor" id="indoor" />
            <label htmlFor="indoor">Indoor</label>
          </div>
          <div>
            <input type="radio" name="zone" value="outdoor" id="outdoor" />
            <label htmlFor="outdoor">Outdoor</label>
          </div>
        </div>
        <Button>Continue</Button>
      </SectionWrapper>
      <SectionWrapper>
        <button>Back</button>
        <h1>Details</h1>
        <p>Thursday, 29th August 2024</p>
        <p>2 people, outdoor seating</p>
        <label>
          Name *<input></input>
        </label>
        <label>
          Surname *<input></input>
        </label>
        <label>
          Phone contact *<input></input>
        </label>
        <p>
          Your table will be held for 15 minutes past your reservation time. If you are running
          late, please contact us to avoid cancellation
        </p>
        <Button>Send Reservation</Button>
      </SectionWrapper>
      <Footer />
    </>
  );
};

export default ReservationPage;
