import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#202639"
    },
    secondary: green
  },
  status: {
    danger: "orange"
  }
});

theme = responsiveFontSizes(theme);

export default theme;
