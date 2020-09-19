import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { orange } from "@material-ui/core/colors";
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  color: {
    bg: "#f7f2ed",
    nav: "#0bb783",
  },
  wrap_spacing: {
    pd: "0vh 8vw",
  },
  status: {
    danger: orange[500],
  },
});

export default theme;
