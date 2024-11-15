import Button from "../../../ui/Button/Button";
import image from "/images/restauranfood.jpg";
import {
  ImageContainer,
  PresentationContainer,
  PresentationSubtittle,
  PresentationText,
  PresentationTittle,
  StyledImage,
} from "./Presentation.styled";
import { useNavigate } from "react-router-dom";
import { getRoute } from "../../../types/routesList";

const Presentation = () => {
  const navigate = useNavigate();

  return (
    <PresentationContainer>
      <div>
        <PresentationTittle>Little Lemon</PresentationTittle>
        <PresentationSubtittle>Chicago</PresentationSubtittle>
        <PresentationText>
          We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago,
          Illionis. We focus on traditional recipes served with a modern twist.
        </PresentationText>
        <Button onClick={() => navigate(getRoute("Reservations"))} value="Reserve a table" />
      </div>
      <ImageContainer>
        <StyledImage style={{ backgroundImage: `url(${image})` }} />
      </ImageContainer>
    </PresentationContainer>
  );
};

export default Presentation;
