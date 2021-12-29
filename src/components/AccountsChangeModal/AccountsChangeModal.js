import { FormWrapper } from "./AccountsChangeModalStyles";
import { StyledContainer } from "../StyledContainer";
import styled, { css } from "styled-components";
import { breakpoints as bp } from "../GlobalStyle";
import React, { useEffect } from "react"
import { Logo } from "../Buttons/ConnectWalletButtonStyles"
import logo1 from "../../assets/metamask.png"
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

const Modal = (props) => {

   
    return (

        // <StyledContainer>
        <>
         <Backdrop visible={props.visible}></Backdrop>
            <FormWrapper visible={props.visible}>
                <TitleContainer>
                    <Logo width={50}><img src={logo1} width={50} /></Logo>
                    <ModalTitle>Link Your Wallet To Proceed</ModalTitle>
                </TitleContainer>
                <ModalTextWrapper>
                    <ModalText>This Wallet is not registered with this account. In order to continue using this DApp Either switch back to your other wallet or add this wallet to your account by clicking the "VERIFY" button below to proove your ownership</ModalText>
                </ModalTextWrapper>
                <ButtonWrapper>
                    <VerifyButton>Verify Wallet</VerifyButton>
                </ButtonWrapper>
              
                
                
            </FormWrapper>
        </>
       
        
    )
}

export default Modal;