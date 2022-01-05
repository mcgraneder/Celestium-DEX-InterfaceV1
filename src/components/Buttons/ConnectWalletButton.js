import React, { useState } from "react"
import { ConnectButton, Logo, ButtonText, ButtonText1 } from "./ConnectWalletButtonStyles"
import useAuth from "../../hooks/useAuth"
import logo1 from "../../assets/metamask.png"
import Loader from "react-loader-spinner"
import styled from "styled-components"
import metamask from "../../assets/metamask.svg"
import walletConnect from "../../assets/wallet_connect.svg"
import coinbase from "../../assets/coinbase.svg"
import fortmatic from "../../assets/fortmatic.svg"
import torus from "../../assets/torus.svg"
import portis from "../../assets/portis.svg"
export const Logo1 = styled.div`

    position: absolute;
//    width: 70px;
//    height: 50px;
   float: left;
//    align-items: center;
   justify-content: center;
//    line-height: 75px;
   left: 82%;
   top: 31%;
//    background: rgb(89, 115, 254);
    
   &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(77, 102, 235);
}




   
`;

const ConnectWalletButton = ({close, color, fontsize, height}) => {

    const { active, account, onPageLoading} = useAuth()
    var logo
    var width1;
    var width2;

    if(localStorage.getItem("provider") === "injected") {
        logo = metamask;
        width1=40
        width2=30
    }
    if(localStorage.getItem("provider") === "walletconnect") {
        logo = walletConnect;
        width1=40
        width2=30
    }
    if(localStorage.getItem("provider") === "fortmatic") {
        logo = fortmatic;
        width1=32
        width2=23
    }
    if(localStorage.getItem("provider") === "portis") {
        logo = portis;
        width1=32
        width2=18
    }
    if(localStorage.getItem("provider") === "torus") {
        logo = torus;
        width1=32
        width2=23
    }


    
    console.log(onPageLoading)

    return (

        <div>

            {active ? <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><Logo width={width1}><img src={logo} width={width2} /></Logo><ButtonText >{account.substring(0, 6)}...{account.substring(account.length - 4)}</ButtonText></ConnectButton> : (!onPageLoading ? <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><ButtonText1>Connect Wallet</ButtonText1></ConnectButton> :  <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><Logo1><Loader style={{paddingTop: "5px"}} type="Oval" height={25} height={25} color="rgb(89,115,254)"></Loader></Logo1><ButtonText1>Connecting..</ButtonText1></ConnectButton>)}
        </div>
    )
}

export default ConnectWalletButton;