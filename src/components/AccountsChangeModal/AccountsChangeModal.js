import React, { useState, useEffect } from "react";
import { FormWrapper } from "./AccountsChangeModalStyles";
import { StyledContainer } from "../StyledContainer";
import styled, { css } from "styled-components";
import { breakpoints as bp } from "../GlobalStyle";
import { Logo } from "../Buttons/ConnectWalletButtonStyles"
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

const Modal = (props) => {

    
    const email = localStorage.getItem("email")
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("Link Your Wallet To Proceed")
    const [colour, setColour] = useState("rgb(22,181,127)")
    var publicAddress;
    var web3;
    

    const handleSignMessage = async (publicAddress, nonce) => {
		try {
			const signature = await web3.eth.personal.sign(
				`Alpha-Baetrum Onboarding unique one-time nonce: ${nonce} by signimg this you are verifying your ownership of this wallet`,
				publicAddress,
				'' // MetaMask will ignore the password argument here
			)
            
			return { signature };
		} catch (error) {

            setLoading(false);
            setText("Link Your Wallet To Proceed")
			setError("Denied! You must Confirm Your wallet To Login");
            setColour("red")
            setTimeout(() => {

                setError("");
                setColour("rgb(22,181,127)")

            }, 5000)
		}
	};

    const loginHandler = async (e) => {

        e.preventDefault()
       // Check if MetaMask is installed
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');
            web3 = new Web3(window.ethereum);

			window.ethereum.request({ method: 'eth_requestAccounts'})
			
		} else {
			console.log('Need to install MetaMask');
			// setErrorMessage('Please install MetaMask browser extension to interact');
		}

		const coinbase = await web3.eth.getCoinbase();
		if (!coinbase) {
			window.alert('Please activate MetaMask first.');
			return;
		}

		publicAddress = coinbase.toLowerCase();

        console.log(publicAddress);
        await web3.eth.getCoinbase().then(async (users) => {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            try {

                console.log(publicAddress)
                const {data} = await axios.post("https://alpha-baetrum.herokuapp.com/api/users/getNonce", {email}, config);
                console.log(data)
                setLoading(true);
                setText("Sending Signature Request")
                console.log(loading) 
                return data

            } catch(error) {

                console.log(error.response)
                setError(error.response.data.error);
                setColour("red")
                setTimeout(() => {
    
                    setError("");
                    setColour("rgb(22,181,127)")
    
                }, 5000)

                return error
            }
        }).then((res) => {


            // console.log(res.success != true) return
            if(res.success != true) return
            const nonce = res.nonce
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            // console.log(username);
    
            try {
    
                handleSignMessage(publicAddress, nonce).then(async function(signature) {
    
                    console.log(signature)
                    const {data} = await axios.post("https://alpha-baetrum.herokuapp.com/api/users/updateAddress", { signature, nonce, publicAddress, email}, config);
                    console.log(data);
                    setText("Success!")
                    console.log(loading);
                    localStorage.removeItem("registered")
                    window.location.reload()
                    // setTimeout(() => {
    
                      
        
                    // }, 1000)
                })
    
                
    
            } catch(error) {
    
                setLoading(false);
                setText("Link Your Wallet To Proceed")
                console.log(error.response)
                setError(error.response.data.error);
                setColour("red")
                setTimeout(() => {
    
                    setError("");
                    setColour("rgb(22,181,127)")
    
                }, 5000)
            }
        })
    }
   
    return (

        // <StyledContainer>
        <>
         <Backdrop visible={props.visible}></Backdrop>
            <FormWrapper visible={props.visible}>
            <IconContents className="fa-stack-1x text-primary">1</IconContents>
            <IconContents2 className="fa-stack-1x text-primary">2</IconContents2>
                <TitleContainer>
                    <Logo width={50}><img src={logo1} width={50} /></Logo>
                    <ModalTitle>{text}</ModalTitle>
                </TitleContainer>
                <ModalTextWrapper>
                    <ModalText>This Wallet is not registered with this account. In order to continue using this DApp Either switch back to your other wallet or add this wallet to your account by clicking the "VERIFY" button below to proove your ownership</ModalText>
                </ModalTextWrapper>
                {/* <Wrapper space={5}></Wrapper> */}
                <IconWrapper>
                    <IconContainer>
                    {/* <IconContents className="fa-stack-1x text-primary" style={{color: "White"}}>1</IconContents> */}
                        <Icon>
                            

                        </Icon>
                        <TextContainer>
                            <IconText colour={"rgb(221,221,229);"} size={19} bold={"bold"}>Switch back to other wallet</IconText>
                            <IconText size={15}>Switch back to other wallet to continue trading</IconText>
                        </TextContainer>   
                    </IconContainer>  
                </IconWrapper>
                <SeperatorText size={17} bold={"bold"}>OR</SeperatorText>
                <IconWrapper>
                    <IconContainer>
                        <Icon>
                        </Icon>
                        <TextContainer>
                            <IconText colour={"rgb(221,221,229);"} size={19} bold={"bold"}>Verify your new wallet</IconText>
                            <IconText size={15}>To use this wallet confirm that you are the owner</IconText>
                        </TextContainer>   
                    </IconContainer>  
                </IconWrapper>
              
                    {loading ?  <ButtonWrapper><Loader type="ThreeDots" color={`rgb(77, 102, 235)`} height={30} width={70}/></ButtonWrapper> : <VerifyButton onClick={loginHandler}>Verify Wallet</VerifyButton>}

                
              
                
                
            </FormWrapper>
        </>
       
        
    )
}

export default Modal;