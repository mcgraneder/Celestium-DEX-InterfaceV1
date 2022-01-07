import React, { useState } from "react";
import { Logo } from "../Buttons/ConnectWalletButtonStyles"
import logo1 from "../../assets/metamask.png"
import Web3 from "web3";
import axios from "axios";
import Loader from "react-loader-spinner";
import { 
    FormWrapper,
    Backdrop,
    TitleContainer,
    ModalTitle,
    ModalTextWrapper,
    ModalText,
    ButtonWrapper,
    VerifyButton,
    IconWrapper,
    Icon,
    TextContainer,
    IconText,
    IconContainer,
    IconContents,
    IconContents2,
    SeperatorText
 } from "./AccountsChangeModalStyles";


const Modal = (props) => {

    
    const email = localStorage.getItem("email")
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("Link Your Wallet To Proceed")
    var publicAddress;
    var web3;
    
    const handleSignMessage = async (publicAddress, nonce) => {

		try {
			const signature = await web3.eth.personal.sign(
				`Alpha-Baetrum Onboarding unique one-time nonce: ${nonce} by signimg this you are verifying your ownership of this wallet`,
				publicAddress,
				'' 
			)
            
			return { signature };

		} catch (error) {

            setLoading(false);
            setText("Link Your Wallet To Proceed")
		}
	};

    const loginHandler = async (e) => {

        e.preventDefault()
		if (window.ethereum && window.ethereum.isMetaMask) web3 = new Web3(window.ethereum);

		const coinbase = await web3.eth.getCoinbase();
		if (!coinbase) {
			window.alert('Please activate MetaMask first.');
			return;
		}

		publicAddress = coinbase.toLowerCase();
        await web3.eth.getCoinbase().then(async (users) => {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            try {

                const {data} = await axios.post("https://alpha-baetrum.herokuapp.com/api/users/getNonce", {email}, config);
                setLoading(true);
                setText("Sending Signature Request")
              
                return data

            } catch(error) {

                console.log(error.response)
            
                return error
            }

        }).then((res) => {

            if(res.success != true) return

            const nonce = res.nonce
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
    
            try {
    
                handleSignMessage(publicAddress, nonce).then(async function(signature) {
    
                    const {data} = await axios.post("https://alpha-baetrum.herokuapp.com/api/users/updateAddress", { signature, nonce, publicAddress, email}, config);
                    setText("Success!")
                    localStorage.removeItem("registered")
                    window.location.reload()
                  
                })
   
            } catch(error) {
    
                setLoading(false);
                setText("Link Your Wallet To Proceed")
            }
        })
    }
   
    return (

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
                <IconWrapper>
                    <IconContainer>
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