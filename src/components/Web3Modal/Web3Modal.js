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
import Provider from "./Provider";
import Disconnect from "./Disconnect";
import useAuth from "../../hooks/useAuth";
import { injected, fortmaticc, toruss, portiss } from "../../connectors/providers";
import ConnectSpinner from "./ConnectSpinner";
export const FormWrapper = styled.div`


    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 740px;
    opacity: 0;
    background-color: rgb(35,35,52);
    text-align: right;
    padding: 30px 20px;
    border: 1.5px solid  rgb(31,31,44);
    border-radius: 10px;
    z-index: -10000;
    ${(props) => props.visible && css`
    z-index: 10000;
    opacity: 1;
    pointer-events: all;
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1) !important;
`}

    // @media(max-width: ${bp.desktop}) {

    //     width: 300px;
    //     height: 700px;
        
    // };
`


export const Backdrop = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    pointer-events: none;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.2);
    transition: opacity 0.05s ease-in-out !important;
    z-index: 10000;
    ${(props) => props.visible && css`

        opacity: 1;
        pointer-events: all;
        transition: opacity 0.05s ease-in-out !important;
    `}

   
`;

export const ButtonContainer = styled.div`

    // width: 300px;
    // height: 100%;
    background: rgb(26,26,39);
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 20px;
    flex-direction: space-between;


   

`;

export const DisclaimerContainer = styled.div`

    // width: 300px;
    // height: 100%;
    background: rgb(26,26,39);
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 12px;
    padding-bottom: 1px;
    margin-bottom: 20px;
    flex-direction: space-between;
`;

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

    position: absolute;
   width: 70px;
   height: 50px;
   float: right;
   align-items: center;
   justify-content: center;
//    line-height: 75px;
   right: 9%;
   bottom: 16.8%;
   background: rgb(35,35,52);;




   
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

export const ModalTextWrapper = styled.div`

    
    justify-content: left !important;
    word-wrap: break-word !important;
    word-wrap: break-word;
    align-items: left !important;
    // width: 4px;
    overflow: hidden;
    margin-bottom: 15px;
// white-space: nowrap;
//   white-space: nowrap;
//   word-wrap: break-word !important;
//   overflow: hidden;
//   text-overflow: ellipsis; // This is where the magic happens
    
`;
export const ModalText = styled.p`

    
    font-size: 16px;
    // line-height: 30px;
    // font-weight: bold;
    color: rgb(141,141,149);
    padding: 8px 12px;
    justify-content: left !important;
    word-wrap: break-word;
    align-items: left  !important;
    text-align: left;
    font-weight: bold;
    
   
    
    
`;

export const ButtonWrapper = styled.div`

    // padding: 10px;
    width: 100%;
    position: absolute;
    right:    42%;
    bottom:   5%;
    align-tems: center !important;
    justify-content: center !important;
`

export const VerifyButton = styled.button`

    background: rgb(89,115,254);
    border: none;
    border-radius: 10px;
    width: ${(props) => props.height}px;
    height: 40px;
    width: 85%;
    background: ${(props) => props.col};
    padding: 5px 10px;
    color: #fff;
    font-size: ${(props) => props.fontsize}px;
    outline: none;
    border: none;
    cursor: pointer;
    // vertical-align: middle;
    position: absolute;
    right:    7%;
    bottom:   5%;
    align-tems: center !important;
    justify-content: center !important;

    


    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgb(77, 102, 235);
    }
`

export const IconWrapper = styled.div`

    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    height: 60px;
    width: 100%;
    margin-bottom: 25px;
`
export const IconContainer = styled.div`

    display: flex;
    width: 100%;
    height: 60px;

`
export const Icon = styled.div`

    margin: 5px 0px;
    width: 75px;
    height: 60px;
    border: 2px solid rgb(22,181,127);
    background:rgb(47,47,60);
    text-align: center;
    border-radius: 50%;
    line-height: 60px;
    // left: 0%;
`;

export const TextContainer = styled.div`

    // display: flex;
    // width: 100%;
    padding-left: 30px;
    padding-right: 20px;
    padding-top: 5px;
    height: 60px;
    color: rgb(141,141,149);
    text-align: left;
    word-wrap: break-word;
    

`
export const IconText = styled.div`

    padding-bottom: 10px;
    height: 20px;
    font-size: ${(props) => props.size}px;
    font-weight: ${(props) => props.bold};
    color: ${(props) => props.colour};
    word-wrap: break-word;
`

export const SeperatorText = styled.div`

    height: 23px;
    font-size: 16px;
    font-weight: bold;
    color: White;
    text-align: center;
`

export const IconContents2 = styled.i`

    // position: absolute:
    bottom: 10%;
    text-align: left;
    width: 50%;
    padding-left: 52px;
    padding-bottom: 90px;
    font-size: 25px;
    color: rgb(141,141,149);;
`

export const IconContents = styled.i`

    // position: absolute:
    bottom: 10%;
    text-align: left;
    width: 50%;
    padding-left: 52px;
    padding-bottom: 206px;
    font-size: 25px;
    color: rgb(141,141,149);
`


const Web3Modal = ({visible, close}) => {

    
    const email = localStorage.getItem("email")
    const [error, setError] = useState("");
    // const [loading, setLoading] = useState(false);
    const [text, setText] = useState("Link Your Wallet To Proceed")
    const [colour, setColour] = useState("rgb(22,181,127)")
    var publicAddress;
    var web3;
    
    const { connectOnClick, connectOnClickFortmatic, connectOnClickTorus, connectOnClickPortis, connectOnClickWalletConnect, disconnect, active, account, loading } = useAuth()
   
    console.log(account)
    
    return (
        <>
         <Backdrop visible={visible} onClick={close}></Backdrop>
            <FormWrapper visible={visible}>
                <DisclaimerContainer>
                    <ModalTextWrapper>
                            <ModalText>By connecting a wallet, you agree to Alpha Baetrum <span style={{color:"rgb(77, 102, 235)"}}>Terms of Service</span> and acknowledge that you have read and understand the Alpha Baetrum <span style={{color:"rgb(77, 102, 235)"}}>Protocol Disclaimer</span>.</ModalText>
                    </ModalTextWrapper>
                </DisclaimerContainer>
                <ButtonContainer>
                    <Provider margin={"20px"} width1={50} logo={metamask} width2={30} title={"MetaMask"} connect={connectOnClick}></Provider>
                    <Provider margin={"20px"} width1={50} logo={coinbase} width2={30} title={"Coinbase"} ></Provider>
                    <Provider margin={"20px"} width1={50} logo={fortmatic} width2={27} title={"Fortmatic"} connect={connectOnClickFortmatic}></Provider>
                    <Provider margin={"20px"} width1={50} logo={torus} width2={27} title={"Torus"} connect={connectOnClickTorus}></Provider>
                    <Provider margin={"20px"} width1={50} logo={portis} width2={25} title={"Portis"} connect={connectOnClickPortis}></Provider>
                    <Provider margin={"20px"} width1={50} logo={walletConnect} width2={35} title={"Wallet Connect"} connect={connectOnClickWalletConnect}></Provider>
                    <Disconnect margin={"20px"} width1={50} logo={walletConnect} width2={35} title={"Disconnect"} connect={disconnect}></Disconnect>
                    {/* <Logo><Loader style={{paddingTop: "5px"}} type="Oval" height={40} color="rgb(77, 102, 235)"></Loader></Logo> */}
                </ButtonContainer>
            </FormWrapper>
            {loading ? <ConnectSpinner></ConnectSpinner> : <div></div>}
        </>
       
        
    )
}

export default Web3Modal;