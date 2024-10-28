import { createTheme } from "@mui/material";
import theme from "../../theme/theme";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.color.primary.main,
      contrastText: theme.color.highlight.secondary,
    },
    secondary: {
      main: theme.color.primary.detail,
      contrastText: theme.color.highlight.primary,
    },
  },
});

export default muiTheme;
