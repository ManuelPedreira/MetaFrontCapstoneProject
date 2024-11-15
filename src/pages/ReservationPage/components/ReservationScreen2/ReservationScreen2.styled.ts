import styled from "styled-components";

export const ReservationDetailsText = styled.p`
  font-family: ${({ theme }) => theme.text.normal.fontFamily};
  font-size: ${({ theme }) => theme.text.normal.fontSize.small};
  color: ${({ theme }) => theme.color.highlight.primary};
  margin: 5px 0;
  text-align: center;
  grid-area: details;
`;

export const ReservationInfoText = styled.span`
  font-family: ${({ theme }) => theme.text.normal.fontFamily};
  font-size: ${({ theme }) => theme.text.normal.fontSize.extraSmall};
  color: ${({ theme }) => theme.color.primary.main};
  font-weight: 500;
  text-align: center;
  grid-area: info;
  text-wrap: balance;
`;
