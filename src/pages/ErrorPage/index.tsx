import { getRoute } from "../../types/routesList";
import InfoPage from "../../components/InfoPage";

const ErrorPage = () => {
  return (
    <InfoPage title="404 - Page Not Found" button="Return to Homepage" buttonTo={getRoute("Home")}>
      Oops! The page you're looking for doesn't exist.
    </InfoPage>
  );
};

export default ErrorPage;
