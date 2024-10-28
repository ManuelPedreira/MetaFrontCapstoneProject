import { DateCalendar } from "@mui/x-date-pickers";
import styled from "styled-components";

export const StyledCalendar = styled(DateCalendar)`
  width: inherit;
  height: 15rem;

  .MuiDayCalendar-header,
  .MuiDayCalendar-weekContainer {
    justify-content: space-between;
  }

  .MuiDayCalendar-weekContainer {
    margin: 0;
  }
  
  .MuiPickersCalendarHeader-root{
    margin: 0;
    padding: 0 0.2rem 0 0.5rem;
  }

  .MuiButtonBase-root {
    width: 2rem;
    height: 2rem;
  }

  .MuiPickersCalendarHeader-label{
    text-transform: capitalize;
  }

  * {
    font-size: ${({ theme }) => theme.text.card.textFontSize};
    font-family: ${({ theme }) => theme.text.card.fontFamily};
    line-height: ${({ theme }) => theme.text.card.lineHeight};
  }
`;
