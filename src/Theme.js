import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import white from "@material-ui/core/colors/lime";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#202639"
    },
    secondary: {
      main: "#006B17"
    }
  },
  status: {
    danger: "orange"
  }
});

theme = responsiveFontSizes(theme);

export default theme;
