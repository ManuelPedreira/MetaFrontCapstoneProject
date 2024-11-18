import { Link, ScrollRestoration } from "react-router-dom";
import { InfoPageContainer, InfoPageWrapper, InfoText, InfoTitle } from "./InfoPage.styled";
import NavBar from "../NavBar";
import SectionWrapper from "../../ui/SectionWrapper";
import Button from "../../ui/Button";
import Footer from "../Footer";

type InfoPageProps = {
  title: string;
  children: React.ReactNode;
  button: string;
  buttonTo: string;
};

const InfoPage = ({ title, children, button, buttonTo }: InfoPageProps) => {
  return (
    <InfoPageWrapper>
      <ScrollRestoration />
      <NavBar />
      <SectionWrapper>
        <InfoPageContainer>
          <InfoTitle>{title}</InfoTitle>
          <InfoText>{children}</InfoText>
          <Link to={buttonTo}>
            <Button value={button} />
          </Link>
        </InfoPageContainer>
      </SectionWrapper>
      <Footer />
    </InfoPageWrapper>
  );
};

export default InfoPage;
