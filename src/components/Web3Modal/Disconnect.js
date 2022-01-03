import React, { useState, useEffect } from "react";
import { StyledContainer } from "../StyledContainer";
import styled, { css } from "styled-components";
import { breakpoints as bp } from "../GlobalStyle";
// import { Logo } from "../Buttons/ConnectWalletButtonStyles"
import metamask from "../../assets/metamask.svg"
import walletConnect from "../../assets/wallet_connect.svg"
import coinbase from "../../assets/coinbase.svg"
import fortmatic from "../../assets/fortmatic.svg"
import torus from "../../assets/torus.svg"
import portis from "../../assets/portis.svg"
import Web3 from "web3";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Wrapper } from "../LoginPage/LoginStyles";


export const ConnectButton = styled.div`

    height: 60px;
    width: 100%;
    background: rgb(77, 102, 235);
    border-radius: 10px;
    margin-top: 20px;
    
    border: 1px solid rgb(45,45,62);
   
    &:hover {

        border: 1px solid rgb(77, 102, 235);
        // height: 60.5px;

    }
`
export const TitleContainer = styled.div`

    height: 40px;
    // display: flex;
    // align-items: center;
    margin-right: ${(props) => props.margin};
    text-algin: center;
    
    
    

`;

export const Logo = styled.i`


    min-height: 22px;
    min-width: 22px;
    color: White;
    font-size: 30px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    
   
`;

export const ModalTitle = styled.div`

    
    font-size: 20px;
    font-weight: bold;
    align-items: center;
    text-align: center;
    color: white;
    // display: flex;
    padding-left: 20px;
    line-height: 60px;
    // float-left;
    left: 0%;
   
    
    
`;

const providers = [

    {
        to: "/trade/wallet",
        icon: "fas fa-wallet",
        label: "Wallet"
    },
    {
        to: "/trade/trade",
        icon: "fa fa-exchange",
        label: "Trade"
    },
    {
        to: "/trade/history",
        icon: "fa fa-history",
        label: "Transactions"
    },
    {
        to: "/trade/tokeninfo",
        icon: "fas fa-coins",
        label: "Token Info"
    },
]

export const StyledLink = styled.div`

    min-height: 50px;
    display: flex;
    align-items: center;
    padding: 5px 125px;
    font-size: 20px;
    font-weight: bold;
    line-height: 60px;
    color: White;
    border-radius: 10px;
    box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.1);
    transition: opacity 0.2s cubic-bezier(0.4, 0, 1, 1);
    text-align: center;

    i {

        min-height: 22px;
        min-width: 22px;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: White;
        
    }

    span {

        padding-left: 14px;
        line-height: 19px;
        text-align: center;
        opacity: ${(props) => Number(!props.compact)};
        white-space: nowrap;
        transition: opacity 0.2s cubic-bezier(0.4, 0, 1, 1);

    }

    &:hover {
        text-decoration: none;
        background-color: rgb(35,35,52);
        color: rgb(22,181,127);

    }

`


const Disconnect = ({margin, width1, logo, width2, title, connect}) => {

    return (
        <ConnectButton onClick={connect} >
        {/* <TitleContainer margin={margin}> */}
        <StyledLink>
            
                    <i className="fas fa-sign-out"></i>
                    <span className="label">Disconnect</span>
        
        </StyledLink>
        {/* </TitleContainer> */}
    </ConnectButton>
    )
}

export default Disconnect;