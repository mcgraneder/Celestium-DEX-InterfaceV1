import React, { useEffect, useCallback, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignUpPage/SignUp";
import ForgotPassword from "./components/ForgotPasswordPage/ForgotPasword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import PrivateRoute from "./components/Routing/PrivateRoute";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import PageLoad from "./components/pageLoadSpinner/PageLoadSpinner";
import useOnPageLoad from "./hooks/useOnPageLoad";
import Particle from "./components/ParticleBackground/Particles";
import Layout from "./components/Layout/Layout";
import UserInfoModal from "./components/Popup/Popup";

function getLibrary(provider) {
  return new Web3(provider);
}
let web3;
function App() {
  const loading = useOnPageLoad();
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const warning = localStorage.getItem("bridgePageWarning");

    if (warning !== "true") setShowWarning(true);
  }, []);

  const closeWarning = useCallback(() => {
    setShowWarning(false);
    localStorage.setItem("bridgePageWarning", "true");
  }, []);

  return (
    <div>
      <Particle></Particle>
      {loading && <PageLoad></PageLoad>}
      <Web3ReactProvider
        getLibrary={getLibrary}
        libraryName={"ethers.js" | "web3.js" | null}
      >

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route
              exact
              path="/passwordreset/:resetToken"
              component={ResetPassword}
            />
            <PrivateRoute exact path="/wallet" component={Layout} />
          </Switch>
        </Router>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
