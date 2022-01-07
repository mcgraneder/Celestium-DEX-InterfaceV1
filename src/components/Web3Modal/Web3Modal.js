import React from "react";
import styled, { css } from "styled-components";
import { breakpoints as bp } from "../GlobalStyle";
import metamask from "../../assets/metamask.svg"
import walletConnect from "../../assets/wallet_connect.svg"
import fortmatic from "../../assets/fortmatic.svg"
import torus from "../../assets/torus.svg"
import portis from "../../assets/portis.svg"
import Provider from "./Provider";
import Disconnect from "./Disconnect";
import useAuth from "../../hooks/useAuth";
import ConnectSpinner from "./ConnectSpinner";

export const FormWrapper = styled.div`


    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 660px;
    opacity: 0;
    background-color: rgb(35,35,52);
    text-align: right;
    padding: 30px 20px;
    border: 1.5px solid  rgb(31,31,44);
    border-radius: 10px;
    z-index: -10000;
    // transition: opacity 0.1s ease-in-out !important;
    ${(props) => props.visible && css`
        z-index: 10000;
        opacity: 1;
        pointer-events: all;
       
    `}

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

    background: rgb(26,26,39);
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 20px;
    flex-direction: space-between;

`;

export const DisclaimerContainer = styled.div`

    background: rgb(26,26,39);
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 12px;
    padding-bottom: 1px;
    margin-bottom: 20px;
    flex-direction: space-between;
`;

export const Logo = styled.div`

   position: absolute;
   width: 70px;
   height: 50px;
   float: right;
   align-items: center;
   justify-content: center;
   right: 9%;
   bottom: 16.8%;
   background: rgb(35,35,52);;   
`;


export const ModalTextWrapper = styled.div`
    
    justify-content: left !important;
    word-wrap: break-word !important;
    word-wrap: break-word;
    align-items: left !important;
    overflow: hidden;
    margin-bottom: 15px;
`;
export const ModalText = styled.p`

    font-size: 16px;
    color: rgb(141,141,149);
    padding: 8px 12px;
    justify-content: left !important;
    word-wrap: break-word;
    align-items: left  !important;
    text-align: left;
    font-weight: bold;

`;



const Web3Modal = ({visible, close}) => {
    
    const { connectOnClick, connectOnClickFortmatic, connectOnClickTorus, connectOnClickPortis, connectOnClickWalletConnect, disconnect, active, account, loading } = useAuth()
  
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
                    <Provider margin={"20px"} width1={50} logo={fortmatic} width2={27} title={"Fortmatic"} connect={connectOnClickFortmatic}></Provider>
                    <Provider margin={"20px"} width1={50} logo={torus} width2={27} title={"Torus"} connect={connectOnClickTorus}></Provider>
                    <Provider margin={"20px"} width1={50} logo={portis} width2={25} title={"Portis"} connect={connectOnClickPortis}></Provider>
                    <Provider margin={"20px"} width1={50} logo={walletConnect} width2={35} title={"Wallet Connect"} connect={connectOnClickWalletConnect}></Provider>
                    <Disconnect margin={"20px"} width1={50} logo={walletConnect} width2={35} title={"Disconnect"} connect={disconnect}></Disconnect>
                </ButtonContainer>
            </FormWrapper>
            {loading ? <ConnectSpinner loading={loading}></ConnectSpinner> : <div></div>}
        </>
    )
}

export default Web3Modal;