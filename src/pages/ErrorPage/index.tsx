import { getRoute } from "../../types/routesList";
import InfoPage from "../../components/InfoPage";
import { ScrollRestoration } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ErrorPageWrapper } from "./ErrorPage.styled";

const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <ScrollRestoration />
      <NavBar />
      <InfoPage
        title="404 - Page Not Found"
        button="Return to Homepage"
        buttonTo={getRoute("Home")}
      >
        Oops! The page you're looking for doesn't exist.
      </InfoPage>
      <Footer />
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
