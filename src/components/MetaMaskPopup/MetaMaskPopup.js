import styled from "styled-components";
import React from "react";
import { StyledTitle, StyledSubTitle } from "../StyledTitle";
import { Button, ButtonWrapper } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import logo from "../../assets/WalletsLogo2.png";
import { LogoStyles, LogoStylesWrapper } from "../LogoStyles";
import { LoginLink } from "../LoginPage/LoginStyles";
import { Link } from "react-router-dom";
import metamask from "../../assets/metamask.svg"
import portis from "../../assets/portis.svg"
import fortmatic from "../../assets/fortmatic.svg"
import walletconnect from "../../assets/wallet_connect.svg"
import torus from "../../assets/torus.svg"
import trustwallet from "../../assets/trustWallet.png"

import { colours } from "../StyledContainer";

const MetamaskLink = styled.a`

    font-size: 25px;
    color: rgb(89,115,254);

    &:hover {

        color: rgb(29,223,224);
        font-weight: bold;
    }
`

export const StyledSubTitle1 = styled.div`

    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colours.primary};
    padding: 0 350px;
    margin-bottom: 100px;
    background-color: transparent;
    display: flex;

`

export const LogoStyles1 = styled.div`

    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-color: transparent;
    background-position: center;
    margin: auto;
    // margin-bottom: 100px;
    // display: flex;
    // flex-direction: row;
`

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
                {/* <StyledSubTitle1 size={25}>
                <LogoStyles1 width={60} height={60} image={metamask}></LogoStyles1>
                <LogoStyles1 width={60} height={60} image={walletconnect}></LogoStyles1>
                <LogoStyles1 width={60} height={60} image={portis}></LogoStyles1>
                <LogoStyles1 width={60} height={60} image={fortmatic}></LogoStyles1>
                <LogoStyles1 width={60} height={60} image={torus}></LogoStyles1>
                <LogoStyles1 width={60} height={60} image={trustwallet}></LogoStyles1>


                </StyledSubTitle1> */}

                </LogoStylesWrapper>
                
            </div>
           
        </div>
    )
}

export default MetamaskPopup;
