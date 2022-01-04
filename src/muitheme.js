import { createTheme } from "@material-ui/core/styles";

const font = "'Raleway'";

const theme = createTheme({
  palette: {
    primary: {
      //main: "#29066B"
      //main: "#176BA0"
      //main: "#2589BD"
      main: "#3FA34D"
    },
    secondary: {
      //main: "#7D3AC1"
      //main: "#19AADE"
      //main: "#187795"
      main: "#333"
      // main: "#5BBA6F"
    }
  },
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none"
    }
  }
});

export default theme;
