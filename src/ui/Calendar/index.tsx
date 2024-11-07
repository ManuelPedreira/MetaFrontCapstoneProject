import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es";
import "dayjs/locale/en";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider as ThemeMuiProvider } from "@mui/material/styles";
import muiTheme from "./muiTheme";
import { StyledCalendar } from "./calendar.styled";
import dayjs, { Dayjs } from "dayjs";

type CalendarProps = {
  value: Date;
  onChange: (date: Date) => void;
  className?: string;
  style?: React.CSSProperties;
};

const isSpanish = () => {
  const browserLanguage = navigator.language;
  const simplifiedLanguage = browserLanguage.replace("_", "").replace("-", "").toLowerCase();
  return simplifiedLanguage === "eses";
};

const Calendar = ({ value, onChange, className }: CalendarProps) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeMuiProvider theme={muiTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={isSpanish() ? "es" : "en"}>
          <StyledCalendar
            className={className}
            disablePast={true}
            showDaysOutsideCurrentMonth
            fixedWeekNumber={5}
            views={["day"]}
            value={dayjs(value)}
            onChange={(day: Dayjs) => onChange(day.toDate())}
          />
        </LocalizationProvider>
      </ThemeMuiProvider>
    </StyledEngineProvider>
  );
};

export default Calendar;
