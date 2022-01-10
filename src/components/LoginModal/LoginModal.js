import React from "react";
import useAuth from "../../hooks/useAuth";
import { FormWrapper, 
         Backdrop, 
         DisclaimerContainer, 
         ModalTextWrapper, 
         ModalText 
} from "./LoginModalStyles";

const LoginModal = ({visible, close}) => {

    return (
        <>
         <Backdrop visible={visible} onClick={close}></Backdrop>
            <FormWrapper visible={visible}>
                <DisclaimerContainer>
                    <ModalTextWrapper>
                            <ModalText>Now that you have <span style={{color:"rgb(77, 102, 235)"}}>registered</span> an account with your email address you can now login anytime with any <span style={{color:"rgb(77, 102, 235)"}}>Wallet</span> that you own You just need to successfully sign the <span style={{color:"rgb(77, 102, 235)"}}>onboarding message</span> each time. Glad to have you aboard. Happy trading! <br></br><br></br> This message will appear on this page until you login for the first time. <br></br><br></br> Click anywhere to close this message</ModalText>
                    </ModalTextWrapper>
                </DisclaimerContainer>
            </FormWrapper>
        </>
    )
}

export default LoginModal;