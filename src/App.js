import { StyledContainer } from "./components/StyledContainer";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignUpPage/SignUp";
import ResetPassword
 from "./components/ForgotPasswordPage/ForgotPasword";
function App() {
  return (

    <Router>
       {/* <ParticleContainer className="patricle-sstyles"/> */}
      <StyledContainer>
      {/* <ParticleContainer className="patricles"/> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/passwordreset" component={ResetPassword}/>
      </Switch>
      </StyledContainer>
      {/* <ParticleContainer className="patricle-sstyles"/> */}
    </Router>
    
  
      
    
     
   

  );
}

export default App;
