import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.3rem;
  text-align: center;
  border-radius: 16px;
  transition: all 0.2s linear;
  font-weight: bold;
  background-color: #f4ce14;
  padding: 0.6rem 2rem;
  border: 0;
  color:#333;

  &:focus-visible {
    outline: 2px solid #495e57;
  }

  &:hover {
    background-color: #debd1a;
    cursor: pointer;
  }

  &:active {
    /* outline:2px solid  #debd1a; */
    background-color: #495e57;
    color: #eee;
  }

  &:disabled {
    background-color: #999;
    color: #fff;
  }
`;
