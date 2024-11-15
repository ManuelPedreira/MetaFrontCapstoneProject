import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es";
import "dayjs/locale/en";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider as ThemeMuiProvider } from "@mui/material/styles";
import muiTheme from "./muiTheme";
import { StyledCalendar } from "./calendar.styled";
import dayjs, { Dayjs } from "dayjs";
import { FieldValues, UseFormRegister } from "react-hook-form";

type CalendarProps = {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  className?: string;
  style?: React.CSSProperties;
  register?: ReturnType<UseFormRegister<FieldValues>>;
};

const isSpanish = () => {
  const browserLanguage = navigator.language;
  const simplifiedLanguage = browserLanguage.replace("_", "").replace("-", "").toLowerCase();
  return simplifiedLanguage === "eses";
};

const Calendar = ({ value, defaultValue, onChange, className, register }: CalendarProps) => {
  const changeHandler = (day: Dayjs) => {
    if (register) register.onChange({ target: { name: register.name, value: day.toDate() } });
    else if (onChange) onChange(day.toDate());
  };

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
            value={value ? dayjs(value) : undefined}
            defaultValue={defaultValue ? dayjs(defaultValue) : undefined}
            {...register}
            onChange={changeHandler}
          />
        </LocalizationProvider>
      </ThemeMuiProvider>
    </StyledEngineProvider>
  );
};

export default Calendar;
