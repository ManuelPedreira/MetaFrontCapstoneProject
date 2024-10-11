import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { navList } from "../../types/navigationPages";
import { NatigationBarItem, NavBarContainer, NavigationBarContainer } from "./NavBar.styled";

const NavBar = () => {
  return (
    <NavBarContainer>
      <img src={logo} />

      <nav>
        <NavigationBarContainer>
          {navList.map((item, index) => (
            <Link to={item.route} key={index}>
              <NatigationBarItem>{item.name}</NatigationBarItem>
            </Link>
          ))}
        </NavigationBarContainer>
      </nav>
    </NavBarContainer>
  );
};

export default NavBar;
