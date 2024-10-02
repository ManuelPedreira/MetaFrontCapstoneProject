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
            <NatigationBarItem key={index}>{item.name}</NatigationBarItem>
          ))}
        </NavigationBarContainer>
      </nav>
    </NavBarContainer>
  );
};

export default NavBar;
