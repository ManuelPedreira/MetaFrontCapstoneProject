import Testimonial from "../../../../ui/Testimonial";
import { TestimonialsTitle, TestimonialsWrapper, TestimonialWrapper } from "./Testimonials.style";

type testimonialType = {
  name: string;
  review: string;
  image: string;
};

const testimonalList: testimonialType[] = [
  {
    name: "Micheal Caldwell",
    review: "This is the best Mediterranean food that I've ever had!",
    image: "/images/testimonials/1.jpg",
  },
  {
    name: "John Rosenblum",
    review: "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.",
    image: "/images/testimonials/2.jpg",
  },
  {
    name: "Tyler Tohmine",
    review:
      "The food here was fire!! Everyone should try this place out at least once if they live in Chicago.",
    image: "/images/testimonials/3.jpg",
  },
  {
    name: "Jim Reynor",
    review: "The food here really refreshed me after a late night shift at the local supply depot.",
    image: "/images/testimonials/4.jpg",
  },
];

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <TestimonialsTitle>Testimonials</TestimonialsTitle>
      <TestimonialWrapper>
        {testimonalList.map(({ name, review, image }) => (
          <Testimonial key={name} name={name} review={review} image={image} />
        ))}
      </TestimonialWrapper>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
