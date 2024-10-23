import logo from "../../assets/Logo.svg";
import burger from "../../assets/icon _hamburger menu.svg";
import basket from "../../assets/Basket.svg";
import { Link } from "react-router-dom";
import { navList } from "../../types/navigationPages";
import {
  NatigationBarItem,
  NavBarContainer,
  NavigationIconHover,
  NavigationIconsSmall,
  NavigationItemsContainer,
  NavigationItemsSmall,
  NavigationWrapperBig,
  NavigationWrapperSmall,
} from "./NavBar.styled";
import { useState } from "react";

const NavBar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <NavBarContainer>
      <NavigationWrapperBig>
        <img src={logo} />

        <nav>
          <NavigationItemsContainer>
            {navList.map((item, index) => (
              <Link to={item.route} key={index}>
                <NatigationBarItem>{item.name}</NatigationBarItem>
              </Link>
            ))}
          </NavigationItemsContainer>
        </nav>
      </NavigationWrapperBig>

      <NavigationWrapperSmall>
        <NavigationIconsSmall>
          <NavigationIconHover src={burger} onClick={() => setVisibleMenu(!visibleMenu)} />
          <img src={logo} />
          <NavigationIconHover src={basket} />
        </NavigationIconsSmall>

        {visibleMenu && (
          <NavigationItemsSmall>
            <NavigationItemsContainer>
              {navList.map((item, index) => (
                <Link to={item.route} key={index}>
                  <NatigationBarItem>{item.name}</NatigationBarItem>
                </Link>
              ))}
            </NavigationItemsContainer>
          </NavigationItemsSmall>
        )}
      </NavigationWrapperSmall>
    </NavBarContainer>
  );
};

export default NavBar;
