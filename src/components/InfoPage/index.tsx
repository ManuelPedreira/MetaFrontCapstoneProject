import { InfoPageContainer, InfoText, InfoTitle } from "./InfoPage.styled";
import SectionWrapper from "../../ui/SectionWrapper";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

type InfoPageProps = {
  title: string;
  children: React.ReactNode;
  button: string;
  buttonTo: string;
  className?: string;
};

const InfoPage = ({ title, children, button, buttonTo, className }: InfoPageProps) => {
  return (
    <SectionWrapper className={className}>
      <InfoPageContainer>
        <InfoTitle>{title}</InfoTitle>
        <InfoText>{children}</InfoText>
        <Link to={buttonTo}>
          <Button value={button} />
        </Link>
      </InfoPageContainer>
    </SectionWrapper>
  );
};

export default InfoPage;
