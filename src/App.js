import React from "react";
import "./App.css";

// material ui modules
import { ThemeProvider } from "@material-ui/styles";

// custom components
import ResponsiveDrawer from "./components/global/ResponsiveDrawer";
import theme from "./muitheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer />
    </ThemeProvider>
  );
}

export default App;
