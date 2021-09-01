import React from "react";
import "./App.css";

// material ui modules
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

// custom components
import ResponsiveDrawer from "./components/global/ResponsiveDrawer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#29066B"
      //main: "#142459"
    },
    secondary: {
      main: "#7D3AC1"
      //main: "#176BA0"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer />
    </ThemeProvider>
  );
}

export default App;
