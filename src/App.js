import { ApplicationContainer, StyledContainer } from "./components/StyledContainer";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignUpPage/SignUp";
import ForgotPassword from "./components/ForgotPasswordPage/ForgotPasword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import PrivateRoute from "./components/Routing/PrivateRoute";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import SideBar from "./components/DEX/SideBar/SideBar";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core'
import React, { useState, useEffect } from "react"
import PageLoad from "./components/pageLoadSpinner/PageLoadSpinner";
import useWeb3 from "./hooks/useWeb3";
import useOnPageLoad from "./hooks/useOnPageLoad";
import Particle from "./components/ParticleBackground/Particles"
import SideBar from "./components/Sidebar/Sidebar";
import Layout from "./components/Layout/Layout";
import Layout1 from "./components/Layout/Layout1";
import axios from "axios";
import Web3Modal from "./components/Web3Modal/Web3Modal";
import Modal from "./components/AccountsChangeModal/AccountsChangeModal";
// import "boxicons"
// import Web3 from "web3";
function getLibrary(provider) {
  return new Web3(provider)
}
function App() {

 
  const loading = useOnPageLoad();


  return (
        
      <div>
        {/* <SideBar></SideBar> */}
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
              <PrivateRoute exact path="/trade" component={Layout}/>
              <PrivateRoute exact path="/trade/tokeninfo" component={Layout}/>
              <PrivateRoute exact path="/trade/profile" component={Layout}/>
        </Switch>
      </Router>
    </Web3ReactProvider>
   
    </div>
  );
}

export default App;
