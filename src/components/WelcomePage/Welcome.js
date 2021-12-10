import React from "react";
import { StyledTitle, StyledSubTitle, Wrapper } from "../StyledTitle";
import { LogoStylesWrapper, LogoStyles } from "../LogoStyles";
import { Button, ButtonWrapper } from "../ButtomStyles";
import Logo from "../../assets/logo.png"

const WelcomePage = () => {

    return(
        <div>
            <div>
                {/* <LogoStylesWrapper>
                <Wrapper space={100}/>
                    <LogoStyles image={Logo} height={250} width={250}></LogoStyles>
                </LogoStylesWrapper> */}
                {/* <Wrapper space={50}/> */}
                <StyledTitle size={100} margin={0} weight={900} styleds={"italic"} align={"center"}>
                    ALPHA-BAETRUM.
                </StyledTitle>
                <StyledTitle size={80} margin={20} weight={600} align={"center"}>
                    Prepetuals Trading
                </StyledTitle>
                <StyledSubTitle size={35}>
                    All in one place
                </StyledSubTitle>
            </div>
            <div style={{margin: "0 100px"}}>
                <ButtonWrapper>
                    <Button to="/login" colour={`#1ddfe0`} bordercolour={`#1ddfe0`}>Login</Button>
                    <Button to="/signup" colour={`#1ddfe0`} bordercolour={`#1ddfe0`}>Sign Up</Button>
                </ButtonWrapper>
                
            </div>
        </div>
    )
}

export default WelcomePage;