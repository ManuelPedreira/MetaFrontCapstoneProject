import {
  AboutUsImage1,
  AboutUsImage2,
  AboutUsImageWrapper,
  AboutUsSubtitle,
  AboutUsText,
  AboutUsTitle,
  AboutUsWrapper,
} from "./AboutUs.styled";

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <div>
        <AboutUsTitle>Little Lemon</AboutUsTitle>
        <AboutUsSubtitle>Chicago</AboutUsSubtitle>
        <AboutUsText>
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's
          diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and
          were inspired to bring the flavors of their hometown in Italy to the people of Chicago.
          The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years
          later.
        </AboutUsText>
      </div>
      <AboutUsImageWrapper>
        <AboutUsImage1 src="/images/Mario and Adrian b.jpg" />
        <AboutUsImage2 src="/images/Mario and Adrian A.jpg" />
      </AboutUsImageWrapper>
    </AboutUsWrapper>
  );
};

export default AboutUs;
