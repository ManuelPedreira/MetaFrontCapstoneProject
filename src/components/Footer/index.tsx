import { Link } from "react-router-dom";
import { navList } from "../../types/navigationPages";
import {
  FooterColumn,
  FooterContainer,
  FooterLogo,
  FooterTitle,
  FooterWrapper,
} from "./Footer.styled";
import logo from "/images/logo-vertical-white.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterColumn>
          <FooterLogo src={logo} />
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Navigation</FooterTitle>
          {navList.map((item, index) => (
            <Link to={item.route} key={index}>
              {item.name}
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Contact</FooterTitle>
          <p>2395 Maldove Way,</p>
          <p>Chicago Illinois</p>
          <Link to="tel:(629)2436827">(629)-243-6827</Link>
          <Link to="mailto:info@littlelemon.com" >info@littlelemon.com</Link>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Connect</FooterTitle>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Join us!</a>
        </FooterColumn>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;