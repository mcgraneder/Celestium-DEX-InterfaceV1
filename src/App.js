import { ApplicationContainer, StyledContainer } from "./components/StyledContainer";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignUpPage/SignUp";
import ForgotPassword from "./components/ForgotPasswordPage/ForgotPasword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import PrivateRoute from "./components/Routing/PrivateRoute";
import DexInterface from "./components/DexInterfacePage/DexInterFacePage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SideBar from "./components/DEX/SideBar/SideBar";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core'
import React, { useState, useEffect } from "react"
import PageLoad from "./components/pageLoadSpinner/PageLoadSpinner";
import useWeb3 from "./hooks/useWeb3";
import useOnPageLoad from "./hooks/useOnPageLoad";
import Particle from "./components/ParticleBackground/Particles"

function getLibrary(provider) {
  return new Web3(provider)
}
function App() {

  useWeb3();
  const loading = useOnPageLoad();
  
  

  return (

    // <>
    
      <div>
        <Particle></Particle>
        {loading && <PageLoad></PageLoad>}
      <Web3ReactProvider getLibrary={getLibrary}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/forgotpassword" component={ForgotPassword}/>
            <Route exact path="/passwordreset/:resetToken" component={ResetPassword}/>
            <ApplicationContainer>
              <PrivateRoute exact path="/trade" component={SideBar}/>
              <PrivateRoute exact path="/trade/wallet" component={DexInterface}/>
              <PrivateRoute exact path="/trade/tokeninfo" component={DexInterface}/>
              <PrivateRoute exact path="/trade/profile" component={DexInterface}/>
            </ApplicationContainer>
        </Switch>
      </Router>
    </Web3ReactProvider>
   
    </div>
  );
}

export default App;
