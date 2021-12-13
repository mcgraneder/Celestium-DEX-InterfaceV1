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
import Navbar from "./components/Navbar/Navbar";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import { Web3ReactProvider } from '@web3-react/core'
// export const loadWeb3 = () =>
//   new Promise( async (resolve, reject) => {
//     let provider = await detectEthereumProvider();
//     if(provider) {
//       await provider.request({ method: 'eth_requestAccounts' });
//       try {
//         const web3 = new Web3(window.ethereum);
//         resolve(web3);
//       } catch(error) {
//         reject(error);
//       }
//     }
//     reject('Install Metamask');
//   });
// loadWeb3();

function getLibrary(provider) {
  return new Web3(provider)
}
function App() {
  return (


    <Router>
       {/* <ParticleContainer className="patricle-sstyles"/> */}
      
      {/* <ParticleContainer className="patricles"/> */}
      {/* <Navbar/> */}
      <Switch>
      <Web3ReactProvider getLibrary={getLibrary}>
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
      </Web3ReactProvider>
      </Switch>
      {/* <ParticleContainer className="patricle-sstyles"/> */}
    </Router>
    
  
      
    
     
   

  );
}

export default App;
