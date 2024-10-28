import { ScrollRestoration } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SectionWrapper from "../../ui/SectionWrapper";

const ErrorPage = () => {
  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <SectionWrapper>ERROR 404</SectionWrapper>
      <Footer />
    </>
  );
};

export default ErrorPage;
