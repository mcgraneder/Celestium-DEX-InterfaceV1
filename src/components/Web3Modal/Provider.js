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
    background: rgb(35,35,52);
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
    
    
    

`;

export const Logo = styled.div`

   width: ${(props) => props.width}px;
   height: ${(props) => props.width}px;
   float: right;
//    align-items: left;
//    justify-content: center;
   line-height: 75px;


   
`;

export const ModalTitle = styled.div`

    
    font-size: 20px;
    font-weight: bold;
    align-items: left;
    color: white;
    display: flex;
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


const Provider = ({margin, width1, logo, width2, title, connect}) => {

    return (
        <ConnectButton onClick={connect} >
        <TitleContainer margin={margin}>
            <Logo width={width1}><img src={logo} width={width2} /></Logo>
            <ModalTitle>{title}</ModalTitle>
        </TitleContainer>
    </ConnectButton>
    )
}

export default Provider;