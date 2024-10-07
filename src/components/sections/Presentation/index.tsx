import Button from "../../../ui/Button/Button";
import image from "../../../assets/restauranfood.jpg";
import {
  ImageContainer,
  PresentationContainer,
  PresentationSubtittle,
  PresentationText,
  PresentationTittle,
  StyledImage,
} from "./Presentation.styled";

const Presentation = () => {
  return (
    <PresentationContainer>
      <div>
        <PresentationTittle>Little Lemon</PresentationTittle>
        <PresentationSubtittle>Chicago</PresentationSubtittle>
        <PresentationText>
          We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago,
          Illionis. We focus on traditional recipes served with a modern twist.
        </PresentationText>
        <Button>Reserve a table</Button>
      </div>
      <ImageContainer>
        <StyledImage style={{ backgroundImage: `url(${image})` }} />
      </ImageContainer>
    </PresentationContainer>
  );
};

export default Presentation;
