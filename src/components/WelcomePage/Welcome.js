import React from "react";
import { StyledTitle, StyledSubTitle, Wrapper } from "../StyledTitle";
import { LogoStylesWrapper, LogoStyles } from "../LogoStyles";
import { Button, ButtonWrapper } from "../ButtomStyles";
import Logo from "../../assets/logo.png"

const WelcomePage = () => {

    return(
        <div>
            <LogoStylesWrapper>
                <LogoStyles image={Logo} height={250} width={250}></LogoStyles>
            </LogoStylesWrapper>
            <Wrapper space={100}/>
            <StyledTitle size={75}>
                Prepetuals Trading
            </StyledTitle>
            <StyledSubTitle size={30}>
                All in one place
            </StyledSubTitle>
            <ButtonWrapper>
                <Button to="/login" colour={`#1ddfe0`} bordercolour={`#1ddfe0`}>Login</Button>
                <Button to="/signup" colour={`#1ddfe0`} bordercolour={`#1ddfe0`}>Sign Up</Button>
            </ButtonWrapper>
            
        </div>
    )
}

export default WelcomePage;