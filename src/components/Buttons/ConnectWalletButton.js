import React from "react"
import useAuth from "../../hooks/useAuth"
import Loader from "react-loader-spinner"
import styled from "styled-components"
import metamask from "../../assets/metamask.svg"
import walletConnect from "../../assets/wallet_connect.svg"
import fortmatic from "../../assets/fortmatic.svg"
import torus from "../../assets/torus.svg"
import portis from "../../assets/portis.svg"
import { 
    ConnectButton, 
    Logo, 
    ButtonText,
    ButtonText1,
    Logo1
} from "./ConnectWalletButtonStyles"


const ConnectWalletButton = ({close, color, fontsize, height, left, top}) => {

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

            {active ? 
            <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><Logo width={width1}><img src={logo} width={width2} /></Logo><ButtonText >{account.substring(0, 6)}...{account.substring(account.length - 4)}</ButtonText></ConnectButton> 
            : (!onPageLoading ? <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><ButtonText1>Connect Wallet</ButtonText1></ConnectButton> 
            :  <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><Logo1 left={left} top={top}><Loader style={{paddingTop: "5px"}} type="Oval" height={25} height={25} color="rgb(89,115,254)"></Loader></Logo1><ButtonText1>Connecting..</ButtonText1></ConnectButton>)
            }
        </div>
    )
}

export default ConnectWalletButton;