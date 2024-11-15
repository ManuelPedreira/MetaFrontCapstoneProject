import styled from "styled-components";

export const InfoPageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const InfoPageContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 4rem auto;
  gap: 2rem;
`;

export const InfoTitle = styled.h1`
  font-family: ${({ theme }) => theme.text.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.text.subtitle.fontSize};
  color: ${({ theme }) => theme.color.primary.main};
  line-height: 3rem;
  margin: 0;
  text-wrap: balance;
`;

export const InfoText = styled.span`
  font-family: ${({ theme }) => theme.text.normal.fontFamily};
  font-size: ${({ theme }) => theme.text.normal.fontSize.normal};
  padding-bottom: 2rem;
  margin: 0;
  text-wrap: balance;
`;
