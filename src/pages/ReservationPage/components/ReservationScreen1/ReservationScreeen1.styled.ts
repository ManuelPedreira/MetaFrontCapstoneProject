import styled from "styled-components";
import RadioSelection from "../../../../ui/RadioSelection";

export const StyledRadioSelection = styled(RadioSelection)`
  grid-area: zone;

  @media (min-width: ${({ theme }) => theme.frames.resolution.phoneBreak.minWidth}) {
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.color.primary.detail};
    padding: 2px 1rem 2px 0;
  }
`;
