import styled from "styled-components";

export const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.primaryTransparent};
  backdrop-filter: blur(8px);
  z-index: 10;
`;

export const NavigationWrapperBig = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) => theme.frames.section.padding};
  max-width: ${({ theme }) => theme.frames.resolution.desktop};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.frames.resolution.phoneBreak.maxWidth}) {
    display: none;
  }
`;

export const NavigationWrapperSmall = styled.div`
  position: relative;

  @media (min-width: ${({ theme }) => theme.frames.resolution.phoneBreak.minWidth}) {
    display: none;
  }
`;

export const NavigationIconsSmall = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.frames.section.padding};
`;

export const NavigationIconHover = styled.img`
  width: 35px;

  &:hover {
    cursor: pointer;
  }
`;

export const NavigationItemsSmall = styled.nav`
  position: absolute;
  background-color: ${({ theme }) => theme.color.background.primaryTransparent};
  backdrop-filter: blur(8px);
  width: 100%;
  padding: 1.5rem 0;
`;

export const NavigationItemsContainer = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.frames.resolution.phoneBreak.maxWidth}) {
    flex-direction: column;
  }
`;

export const NatigationBarItem = styled.li`
  font-family: ${({ theme }) => theme.text.navigationBar.fontFamily};
  font-size: ${({ theme }) => theme.text.navigationBar.fontSize};
  font-weight: ${({ theme }) => theme.text.navigationBar.fontWeight};
  color: ${({ theme }) => theme.color.highlight.primary};

  &:hover {
    color: ${({ theme }) => theme.color.primary.main};
    cursor: pointer;
    text-decoration: underline;
  }
`;
