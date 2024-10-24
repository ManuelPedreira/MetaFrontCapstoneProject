import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { routesList } from "../../types/routesList";
import {
  NatigationBarItem,
  NavBarContainer,
  NavigationIcon,
  NavigationIconsSmall,
  NavigationItemsContainer,
  NavigationItemsSmall,
  NavigationWrapperBig,
  NavigationWrapperSmall,
} from "./NavBar.styled";
import { useState } from "react";
import BasketSVG from "../../ui/svg/BasketSVG";
import BurgerSVG from "../../ui/svg/BurgerSVG";

const NavBar = () => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  return (
    <NavBarContainer>
      <NavigationWrapperBig>
        <img src={logo} />

        <nav>
          <NavigationItemsContainer>
            {routesList.map((item, index) => (
              <Link to={item.route} key={index}>
                <NatigationBarItem $menuOpen={true}>{item.name}</NatigationBarItem>
              </Link>
            ))}
          </NavigationItemsContainer>
        </nav>
      </NavigationWrapperBig>

      <NavigationWrapperSmall $menuOpen={isVisibleMenu}>
        <NavigationIconsSmall>
          <NavigationIcon onClick={() => setIsVisibleMenu(!isVisibleMenu)} $menuOpen={isVisibleMenu}>
            <BurgerSVG />
          </NavigationIcon>
          <img src={logo} />
          <NavigationIcon>
            <BasketSVG />
          </NavigationIcon>
        </NavigationIconsSmall>

        <NavigationItemsSmall $menuOpen={isVisibleMenu}>
          <NavigationItemsContainer>
            {routesList.map((item, index) => (
              <Link to={item.route} key={index} onClick={() => setIsVisibleMenu(false)}>
                <NatigationBarItem $menuOpen={isVisibleMenu}>{item.name}</NatigationBarItem>
              </Link>
            ))}
          </NavigationItemsContainer>
        </NavigationItemsSmall>
      </NavigationWrapperSmall>
    </NavBarContainer>
  );
};

export default NavBar;
