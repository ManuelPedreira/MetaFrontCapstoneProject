import ArrowSVG from "../svg/ArrowSVG";
import { BackButtonContainer } from "./BackButton.styled";

const BackButton = () => {
  return (
    <BackButtonContainer>
      <ArrowSVG direction="left" />
    </BackButtonContainer>
  );
};

export default BackButton;
