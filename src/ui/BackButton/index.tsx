import ArrowSVG from "../svg/ArrowSVG";
import { BackButtonContainer } from "./BackButton.styled";

const BackButton = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <BackButtonContainer onClick={onClick}>
      <ArrowSVG direction="left" />
    </BackButtonContainer>
  );
};

export default BackButton;
