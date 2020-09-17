import React from "react";
import "./App.css";
import Metronic from "./components/Metronic/Metronic";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  ThemProvider,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Metronic />
    </ThemeProvider>
  );
}

export default App;
