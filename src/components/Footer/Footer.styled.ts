import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.frames.section.padding};
  color: ${({ theme }) => theme.color.highlight.secondary};
  background-color: ${({ theme }) => theme.color.primary.main};
  padding-top: 2rem;
`;

export const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.frames.resolution.desktop};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.frames.resolution.phoneBreak.maxWidth}) {
    justify-content: space-evenly;
  }

  p,
  a {
    white-space: nowrap;
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.color.highlight.secondary};
    display: block;
  }
`;

export const FooterColumn = styled.div`
  font-family: ${({ theme }) => theme.text.navigationBar.fontFamily};
  font-size: ${({ theme }) => theme.text.navigationBar.fontSize};
  max-width: 150px;
  flex: 1 1 150px;

  @media (max-width: ${({ theme }) => theme.frames.resolution.phoneBreak.maxWidth}) {
    flex: 1 1 250px;
    max-width: 250px;

    @media (max-width: 600px) {
      flex: 1 1 150px;
      max-width: 1500px;
    }
  }
`;

export const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.text.navigationBar.fontSize};
  color: ${({ theme }) => theme.color.primary.detail};
  margin: 0 0 1.5rem 0;
`;

export const FooterLogo = styled.img`
  margin: auto 0;
  max-width: 120px;
`;
