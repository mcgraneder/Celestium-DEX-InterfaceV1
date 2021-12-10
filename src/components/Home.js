import React from "react";
import WelcomePage from "./WelcomePage/Welcome";
import { StyledContainer } from "./StyledContainer";
import Navbar from "./Navbar/Navbar";
import { Wrapper } from "./ForgotPasswordPage/ForgotPasswordStyles";
const Home = () => {

    return(

        <div>
        <Navbar></Navbar>
        <StyledContainer>
            <WelcomePage></WelcomePage>
        </StyledContainer>
        </div>
    )
}

export default Home;