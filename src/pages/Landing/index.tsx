import AboutUs from "../../components/sections/AboutUs";
import Presentation from "../../components/sections/Presentation";
import Specials from "../../components/sections/Specials";
import Testimonials from "../../components/sections/Testimonials";
import SectionWrapper from "../../ui/SectionWrapper";

const Landing = () => {
  return (
    <>
      <SectionWrapper background><Presentation /></SectionWrapper>
      <SectionWrapper><Specials /></SectionWrapper>
      <SectionWrapper background><Testimonials /></SectionWrapper>
      <SectionWrapper><AboutUs /></SectionWrapper>
    </>
  );
};

export default Landing;
