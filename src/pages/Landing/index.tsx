import AboutUs from "../../components/sections/AboutUs";
import Presentation from "../../components/sections/Presentation";
import Specials from "../../components/sections/Specials";
import Testimonials from "../../components/sections/Testimonials";
import Wrapper from "../../ui/Wrapper";

const Landing = () => {
  return (
    <>
      <Wrapper background><Presentation /></Wrapper>
      <Wrapper><Specials /></Wrapper>
      <Wrapper background><Testimonials /></Wrapper>
      <Wrapper><AboutUs /></Wrapper>
    </>
  );
};

export default Landing;
