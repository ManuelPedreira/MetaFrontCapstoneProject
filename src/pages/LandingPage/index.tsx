import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import AboutUs from "../../components/sections/AboutUs";
import Presentation from "../../components/sections/Presentation";
import Specials from "../../components/sections/Specials";
import Testimonials from "../../components/sections/Testimonials";
import SectionWrapper from "../../ui/SectionWrapper";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <SectionWrapper background><Presentation /></SectionWrapper>
      <SectionWrapper><Specials /></SectionWrapper>
      <SectionWrapper background><Testimonials /></SectionWrapper>
      <SectionWrapper><AboutUs /></SectionWrapper>
      <Footer />
    </>
  );
};

export default LandingPage;