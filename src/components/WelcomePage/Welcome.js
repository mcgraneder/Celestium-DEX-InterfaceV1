import React from "react";
import { StyledTitle, StyledSubTitle } from "../StyledTitle";
import { Button, ButtonWrapper } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";

const WelcomePage = () => {

    return(
        <div>
            <div>
                <Wrapper space={50}/>
                <StyledTitle size={100} margin={0} weight={900} styleds={"italic"} align={"center"}>WEB3 ECDSA AUTH</StyledTitle>
                <StyledTitle size={65} margin={20} weight={600} align={"center"}>Advanced Crypto Login</StyledTitle>
                <StyledSubTitle size={35}>email and ENS secure</StyledSubTitle>
            </div>
            <div style={{margin: "0 60px"}}>
                <ButtonWrapper>
                    <Button to="/login" colour={`#1ddfe0`} bordercolour={`#1ddfe0`}>Login</Button>
                    <Button to="/signup" colour={`#1ddfe0`} bordercolour={`#1ddfe0`}>Sign Up</Button>
                </ButtonWrapper> 
            </div>
        </div>
    )
}

export default WelcomePage;
