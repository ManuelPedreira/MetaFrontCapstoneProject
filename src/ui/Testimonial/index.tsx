import { TestimonialContainer, TestimonialPicture } from "./Testimonial.style";

type TestimonialProps = {
  name: string;
  review: string;
  image: string;
};

const Testimonial = ({ name, review, image }: TestimonialProps) => {
  return (
    <TestimonialContainer>
      <TestimonialPicture src={image}/>
      <h6>{name}</h6>
      <p>{review}</p>
    </TestimonialContainer>
  );
};

export default Testimonial;
