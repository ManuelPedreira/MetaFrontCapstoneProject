import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.frames.resolution.desktop};
  padding: ${({ theme }) => theme.frames.section.padding};
`;

export const NavigationBarContainer = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;
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
