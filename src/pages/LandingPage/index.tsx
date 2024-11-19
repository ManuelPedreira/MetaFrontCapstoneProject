import AboutUs from "./sections/AboutUs";
import Presentation from "./sections/Presentation";
import Specials from "./sections/Specials";
import Testimonials from "./sections/Testimonials";
import SectionWrapper from "../../ui/SectionWrapper";

const LandingPage = () => {
  return (
    <>
      <SectionWrapper background><Presentation /></SectionWrapper>
      <SectionWrapper><Specials /></SectionWrapper>
      <SectionWrapper background><Testimonials /></SectionWrapper>
      <SectionWrapper><AboutUs /></SectionWrapper>
    </>
  );
};

export default LandingPage;
