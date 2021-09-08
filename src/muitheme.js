import { createTheme } from "@material-ui/core/styles";

const font = "'Raleway'";

const theme = createTheme({
  palette: {
    primary: {
      //main: "#29066B"
      main: "#176BA0"
    },
    secondary: {
      //main: "#7D3AC1"
      main: "#19AADE"
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
