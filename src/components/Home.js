import React from "react";
import { StyledTitle, StyledSubTitle, Wrapper } from "./StyledTitle";
import ParticlesContainer from "./ParticleContainer";
import { LogoStylesWrapper, LogoStyles } from "./LogoStyles";
import { Button, ButtonWrapper } from "./ButtomStyles";
import Logo from "../assets/logo.png"
import ParticleContainer from "./ParticleContainer";
import WelcomePage from "./WelcomePage/Welcome";

const Home = () => {

    return(

        <div>
            <WelcomePage></WelcomePage>
        </div>
       
        // <div>
            
        //     {/* <ParticlesContainer/> */}

        //     <LogoStylesWrapper>
        //         <LogoStyles image={Logo}></LogoStyles>
        //     </LogoStylesWrapper>
        //     <Wrapper />
        //     <StyledTitle size={75}>
        //         Prepetuals Trading
        //     </StyledTitle>
        //     <StyledSubTitle size={30}>
        //         All in one place
        //     </StyledSubTitle>
        //     <ButtonWrapper>
        //         <Button to="/login">Login</Button>
        //         <Button to="/signup">Sign Up</Button>
        //     </ButtonWrapper>
            
        // </div>
    )
}

export default Home;