import styled from "styled-components";
import React from "react";
import { StyledTitle, StyledSubTitle } from "../StyledTitle";
import { Button, ButtonWrapper } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import logo from "../../assets/metamask.png";
import { LogoStyles, LogoStylesWrapper } from "../LogoStyles";
import { LoginLink } from "../LoginPage/LoginStyles";
import { Link } from "react-router-dom";

const MetamaskLink = styled.a`

    font-size: 25px;
    color: rgb(89,115,254);

    &:hover {

        color: rgb(29,223,224);
        font-weight: bold;
    }
`

const MetamaskPopup = () => {


    return(
        <div>
            <div>
                <LogoStylesWrapper>
                    <LogoStyles width={300} height={300} image={logo}></LogoStyles>
                    <Wrapper space={15}/>
                    <StyledTitle size={80} margin={0} weight={900} styleds={"italic"} align={"center"}>Connect to get started!</StyledTitle>
                <StyledTitle size={40} margin={20} weight={600} align={"center"}>Dont have Metamask? No problem!</StyledTitle>
                <StyledSubTitle size={25}>You can get it <MetamaskLink href="https://metamask.io/" style={{textDecoration:"none"}}>here</MetamaskLink></StyledSubTitle>
                </LogoStylesWrapper>
                
            </div>
           
        </div>
    )
}

export default MetamaskPopup;
