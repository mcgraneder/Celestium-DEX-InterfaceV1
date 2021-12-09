import { StyledContainer } from "./components/StyledContainer";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignUpPage/SignUp";
import ForgotPassword from "./components/ForgotPasswordPage/ForgotPasword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import PrivateRoute from "./components/Routing/PrivateRoute";
import DexInterface from "./components/DexInterfacePage/DexInterFacePage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (

    <Router>
       {/* <ParticleContainer className="patricle-sstyles"/> */}
      <StyledContainer>
      {/* <ParticleContainer className="patricles"/> */}
      <Switch>
        <PrivateRoute exact path="/trade" component={DexInterface}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/forgotpassword" component={ForgotPassword}/>
        <Route exact path="/passwordreset/:resetToken" component={ResetPassword}/>
      </Switch>
      </StyledContainer>
      {/* <ParticleContainer className="patricle-sstyles"/> */}
    </Router>
    
  
      
    
     
   

  );
}

export default App;
