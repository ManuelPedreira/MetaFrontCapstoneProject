import FoodCard from "../../../../ui/FoodCard";
import { SepcialsTitle, SpecialsCardsContainer, SpecialsContainer } from "./Specials.style";

type specialType = {
  title: string;
  price: string;
  image: string;
  description: string;
};

const specialList: specialType[] = [
  {
    title: "Greek Salad",
    price: "$12.99",
    image: "/images/specials/greek salad.jpg",
    description:
      "Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.",
  },
  {
    title: "Bruschetta",
    price: "$16.99",
    image: "/images/specials/bruchetta.jpg",
    description:
      "Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
  },
  {
    title: "Macaroni",
    price: "$14.99",
    image: "/images/specials/macaroni.jpg",
    description:
      "Delicious macaroni pasta tossed in a creamy cheese sauce, topped with crispy breadcrumbs and fresh parsley.",
  }
];

const Specials = () => {
  return (
    <SpecialsContainer>
      <SepcialsTitle>This weeks specials</SepcialsTitle>

      <SpecialsCardsContainer>
        {specialList.map(({ title, price, description, image }) => (
          <FoodCard
            key={title}
            title={title}
            price={price}
            image={image}
            description={description}
            buttonText="Order for Delivery"
          />
        ))}
      </SpecialsCardsContainer>
    </SpecialsContainer>
  );
};

export default Specials;
