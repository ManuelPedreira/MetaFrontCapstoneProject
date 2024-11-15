import styled from "styled-components";

export const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.primaryTransparent};
  backdrop-filter: blur(8px);
  z-index: 1;
`;

export const StyledLogo = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const NavigationWrapperBig = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${({ theme }) => theme.frames.section.padding};
  max-width: ${({ theme }) => theme.frames.resolution.desktop};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.frames.resolution.phoneBreak.maxWidth}) {
    display: none;
  }
`;

type NavigationSmallBarProps = {
  $menuOpen?: boolean;
};

export const NavigationWrapperSmall = styled.div<NavigationSmallBarProps>`
  position: relative;
  transition: 0.2s all linear;

  ${({ theme, $menuOpen }) => $menuOpen && `background-color:${theme.color.background.primary}`};

  @media (min-width: ${({ theme }) => theme.frames.resolution.phoneBreak.minWidth}) {
    display: none;
  }
`;

export const NavigationIconsSmall = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationIcon = styled.div<NavigationSmallBarProps>`
  width: 35px;
  height: 35px;
  padding: 0.6rem ${({ theme }) => theme.frames.section.paddingMobile};
  ${({ theme, $menuOpen }) => $menuOpen && `background-color:${theme.color.primary.detail}`};
  transition: 0.2s all linear;

  @media (pointer: fine) {
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.primary.detail};
    }
  }
`;

export const NavigationItemsSmall = styled.nav<NavigationSmallBarProps>`
  position: absolute;
  width: 100%;
  height: 100vh;
  padding: 1.5rem 0;
  background-color: ${({ theme }) => theme.color.background.primary};
  backdrop-filter: blur(8px);
  transition: 0.4s all linear;

  top: ${({ $menuOpen }) => ($menuOpen ? "50px" : "-120vh")};
  z-index: -1;
`;

export const NavigationItemsContainer = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.frames.resolution.phoneBreak.maxWidth}) {
    gap: 2rem;
    flex-direction: column;
  }
`;

export const NatigationBarItem = styled.li<NavigationSmallBarProps>`
  font-family: ${({ theme }) => theme.text.navigationBar.fontFamily};
  font-size: ${({ theme }) => theme.text.navigationBar.fontSize};
  font-weight: ${({ theme }) => theme.text.navigationBar.fontWeight};
  color: ${({ theme }) => theme.color.highlight.primary};
  transition: 1.2s all linear;

  ${({ $menuOpen }) => !$menuOpen && "display: none"};

  @media (max-width: ${({ theme }) => theme.frames.resolution.phoneBreak.maxWidth}) {
    font-size: ${({ theme }) => theme.text.normal.fontSize.normal};
  }
`;
