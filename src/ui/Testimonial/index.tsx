import {
  TestimonialContainer,
  TestimonialHeader,
  TestimonialName,
  TestimonialPicture,
  TestimonialText,
} from "./Testimonial.style";

type TestimonialProps = {
  name: string;
  review: string;
  image: string;
};

const Testimonial = ({ name, review, image }: TestimonialProps) => {
  return (
    <TestimonialContainer>
      <TestimonialHeader>
        <TestimonialPicture src={image} />
        <TestimonialName>{name}</TestimonialName>
      </TestimonialHeader>
      <TestimonialText>{review}</TestimonialText>
    </TestimonialContainer>
  );
};

export default Testimonial;
