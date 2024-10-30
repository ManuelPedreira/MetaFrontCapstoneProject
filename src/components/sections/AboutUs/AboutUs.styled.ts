import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.frames.resolution.phoneBreak.maxWidth}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const AboutUsTitle = styled.h1`
  font-family: ${({ theme }) => theme.text.title.fontFamily};
  font-size: ${({ theme }) => theme.text.title.fontSize};
  color: ${({ theme }) => theme.color.primary.detail};
  line-height: 3rem;
  margin: 0;
`;

export const AboutUsSubtitle = styled.h3`
  font-family: ${({ theme }) => theme.text.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.text.subtitle.fontSize};
  color: ${({ theme }) => theme.color.primary.main};
  margin: 1rem 0;
`;

export const AboutUsText = styled.p`
  font-family: ${({ theme }) => theme.text.normal.fontFamily};
  font-size: ${({ theme }) => theme.text.normal.fontSize.normal};
  text-align: justify;

  @media (min-width: ${({ theme }) => theme.frames.resolution.phoneBreak.minWidth}) {
    max-width: 600px;
  }
`;

export const AboutUsImageWrapper = styled.div`
  position: relative;
  align-self: center;

  aspect-ratio: 3/4;
  min-width: 370px;
  height: 350px;
  
  @media (max-width: ${({ theme }) => theme.frames.resolution.phoneBreak.maxWidth}) {
    aspect-ratio: 4/3;
    height: auto;
    min-width: 200px;
    width: 100%;
  }
`;

const AboutUsImage = styled.img`
  width: 200px;
  aspect-ratio: 3/4;
  object-fit: cover;
  object-position: 80%;
  overflow: hidden;
  box-shadow: 0 0 15px -5px ${({ theme }) => theme.color.background.secondarySoft};

  border-radius: ${({ theme }) => theme.radiuses.medium};

  @media (max-width: ${({ theme }) => theme.frames.resolution.phoneBreak.maxWidth}) {
    width: 60%;
    aspect-ratio: 4/3;
  }
`;

export const AboutUsImage1 = styled(AboutUsImage)`
  position: absolute;
  bottom: 0;
  left: 0;
  object-position: 90%;
`;

export const AboutUsImage2 = styled(AboutUsImage)`
  position: absolute;
  top: 0;
  right: 0;
`;
