import { navList } from "../../types/navigationPages";

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Navigation</h3>
        {navList.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
      </div>
      <div>
        <h3>Contact</h3>
        <p>2395 Maldove Way,</p>
        <p>Chicago Illinois</p>
        <p>(629)-243-6827</p>
        <p>info@littlelemon.com</p>
      </div>
      <div>
        <h3>Connect</h3>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Join us!</p>
      </div>
    </footer>
  );
};

export default Footer;
