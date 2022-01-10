import React from "react";
import { StyledTitle, StyledSubTitle } from "../StyledTitle";
import { Wrapper } from "../StyledTitle";
import logo from "../../assets/WalletsLogo2.png";
import { LogoStyles, LogoStylesWrapper } from "../LogoStyles";

const MetamaskPopup = () => {


    return(
        <div>
            <div>
                <LogoStylesWrapper>
                    <LogoStyles width={815} height={330} image={logo}></LogoStyles>
                    <Wrapper space={15}/>
                    <StyledTitle size={80} margin={0} weight={900} styleds={"italic"} align={"center"}>Connect to get started!</StyledTitle>
                    <StyledTitle size={40} margin={20} weight={600} align={"center"}>Dont Have A Wallet? No Problem!</StyledTitle>
                    <StyledSubTitle size={25}>Connect To Get Started</StyledSubTitle>
                    <Wrapper space={35}/>
                </LogoStylesWrapper>  
            </div>
        </div>
    )
}

export default MetamaskPopup;
