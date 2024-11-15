import Button from "../Button/Button";

import {
  FoodCardBody,
  FoodCardContainer,
  FoodCardDescription,
  FoodCardHeaderContainer,
  FoodCardPrice,
  FoodCardTitle,
  FoodCarPicture,
} from "./FoodCard.styled";

type FoodCardProps = {
  title: string;
  price: string;
  image: string;
  description: string;
  buttonText: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const FoodCard = ({ title, price, image, description, buttonText, onClick }: FoodCardProps) => {
  return (
    <FoodCardContainer>
      <FoodCarPicture src={image} />
      <FoodCardBody>
        <FoodCardHeaderContainer>
          <FoodCardTitle>{title}</FoodCardTitle>
          <FoodCardPrice>{price}</FoodCardPrice>
        </FoodCardHeaderContainer>
        <FoodCardDescription>{description}</FoodCardDescription>
        <Button onClick={onClick} value={buttonText} />
      </FoodCardBody>
    </FoodCardContainer>
  );
};

export default FoodCard;
