import React from "react";
import { Logo } from "../Buttons/ConnectWalletButtonStyles"
import logo1 from "../../assets/metamask.png"
import { 
    FormWrapper,
    Backdrop,
    TitleContainer,
    ModalTitle,
    ModalTextWrapper,
    ModalText,
    IconWrapper,
    Icon,
    TextContainer,
    IconText,
    IconContainer,
    IconContents,
    IconContents2,
    SeperatorText
 } from "./NotCurrentUserModalStyles";

const NotCurrentUserModal = (props) => {

    return (

        <>
         <Backdrop visible={props.visible}></Backdrop>
            <FormWrapper visible={props.visible}>
            <IconContents className="fa-stack-1x text-primary">1</IconContents>
            <IconContents2 className="fa-stack-1x text-primary">2</IconContents2>
                <TitleContainer>
                    <Logo width={50}><img src={logo1} width={50} /></Logo>
                    <ModalTitle>Cannot Use This Wallet!</ModalTitle>
                </TitleContainer>
                <ModalTextWrapper>
                    <ModalText>This Wallet is registered with another account. In order to continue using this DApp Either switch back to your other wallet or log out and sign into your other account which is registered with this wallet</ModalText>
                </ModalTextWrapper>
                <IconWrapper>
                    <IconContainer>
                        <Icon>
                        </Icon>
                        <TextContainer>
                            <IconText colour={"rgb(221,221,229);"} size={19} bold={"bold"}>Switch back to other wallet</IconText>
                            <IconText size={15}>Switch back to your other wallet to continue trading</IconText>
                        </TextContainer>   
                    </IconContainer>  
                </IconWrapper>
                <SeperatorText size={17} bold={"bold"}>OR</SeperatorText>
                <IconWrapper>
                    <IconContainer>
                        <Icon>
                        </Icon>
                        <TextContainer>
                            <IconText colour={"rgb(221,221,229);"} size={19} bold={"bold"}>Change Email Accounts</IconText>
                            <IconText size={15}>Login with the email this wallet is registered with</IconText>
                        </TextContainer>   
                    </IconContainer>  
                </IconWrapper>
            </FormWrapper>
        </>  
    )
}

export default NotCurrentUserModal;