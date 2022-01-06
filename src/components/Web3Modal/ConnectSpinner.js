import React, { useState, useEffect } from "react";

import { StyledContainer } from "../StyledContainer";
import styled, { css } from "styled-components";
import { breakpoints as bp } from "../GlobalStyle";
import logo1 from "../../assets/metamask.png"
import Web3 from "web3";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Wrapper } from "../LoginPage/LoginStyles";
// export const Backdrop = styled.div`

//     position: fixed;
//     height: 100vh;
//     width: 100vw;
//     opacity: 0;
//     pointer-events: none;
//     backdrop-filter: blur(3px);
//     background-color: rgba(0, 0, 0, 0.2);
//     transition: transform 1s cubic-bezier(0.4, 0, 1, 1) !important;
//     z-index: 10000;
//     pointer-events: auto

//     ${(props) => props.visible && css`

//         opacity: 1;
//         pointer-events: all;
//     `}

//     @media(min-width: ${bp.desktop}) {

//         opacity: 0;
//         pointer-events: none;
//         opacityL 0.3s 
//     }
    
// `

export const FormWrapper = styled.div`

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    opacity: 1;
    background-color: rgb(35,35,52);
    text-align: right;
    padding: 20px 20px;
    border: 1.5px solid  rgb(31,31,44);
    border-radius: 10px;
    z-index: 10000;
    ${(props) => props.visible && css`

    opacity: 1;
    pointer-events: all;
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1) !important;
`}
    
`

export const Backdrop = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 1;
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

export const TitleContainer = styled.div`

    height: 40px;
    display: flex;
    

`;

export const ModalTitle = styled.div`

    
    font-size: 23px;
    line-height: 32px;
    font-weight: bold;
    color: white;
   
    
    
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
export const Logo = styled.div`

    position: absolute;
   width: 70px;
   height: 50px;
   float: right;
   align-items: center;
   justify-content: center;
//    line-height: 75px;
   right: 35%;
   bottom: 35%;
   background: rgb(35,35,52);;




   
`;

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

const ConnectSpinner = (props) => {

    const [text, setText] = useState("Connecting...")
    useEffect(() => {

        if(props.loading) {

            setTimeout(() => {

                setText("Please Wait...")
            }, 5000)
        }
    }, [props.loading])
    return (

        // <StyledContainer>
        <>
         <Backdrop visible={props.visible}></Backdrop>
            <FormWrapper visible={props.visible}>
            <TitleContainer>
                    {/* <Logo width={50}><img src={logo1} width={50} /></Logo> */}
                    <ModalTitle>{text}</ModalTitle>
                </TitleContainer>
            <Logo><Loader type="Oval" height={60} color="rgb(77, 102, 235)"></Loader></Logo>
            </FormWrapper>
        </>
       
        
    )
}

export default ConnectSpinner;