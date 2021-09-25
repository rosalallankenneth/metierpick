import React, { useEffect, useState } from "react";
import "./App.css";

// material ui modules
import { ThemeProvider } from "@material-ui/styles";

// react router imports
import { Route, Switch, Redirect } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/actions/authActions";

// firebase
import { auth } from "./firebase/config";
import { signup, login, logout } from "./firebase/auth";

// custom components
import AppContainer from "./components/global/AppContainer";
import theme from "./muitheme";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/signup/SignupPage";
import SplashScreen from "./components/global/SplashScreen";

const setAuthUser = async (authUser, dispatch) => {
  await dispatch(setUser(authUser));
};

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setAuthUser(user, dispatch).then(() => {
        setIsLoading(false);
      });
    });
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/login">
            {user ? <Redirect to="/" /> : <LoginPage login={login} />}
          </Route>
          <Route exact path="/signup">
            {user ? <Redirect to="/" /> : <SignupPage signup={signup} />}
          </Route>
          <Route path="/">
            {user ? <AppContainer logout={logout} /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
