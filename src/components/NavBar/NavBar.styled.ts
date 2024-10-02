import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0.5rem 1rem;
`;

export const NavigationBarContainer = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;
`;

export const NatigationBarItem = styled.li`
  font-weight: 600;

  &:hover {
    color: #495e57;
    cursor: pointer;
    text-decoration: underline;
  }
`;
