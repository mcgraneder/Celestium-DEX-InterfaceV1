import React from "react";
import { FormWrapper, FieldWrapper, FieldDescriptor, ReturnHomeButton } from "./ForgotPasswordStyles";
import { StyledTitle } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import { Button, ButtonWrapper } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import { FiMail } from "react-icons/fi";
import {BsArrowReturnLeft } from "react-icons/bs"
import TextInputField from "../LoginPage/TextInput";
import { LogoStyles } from "../LogoStyles";

const ResetPassword = () => {

    return (
       <div>
           <FormWrapper>
                <ReturnHomeButton to="/login"><BsArrowReturnLeft style={{"padding-top": "15px"}}/></ReturnHomeButton>
                <LogoStyles image={Logo} width={150} height={150}/>
                <StyledTitle color={"white"} size={30}>
                    Enter Your Email To Receive A New Password
                </StyledTitle>
                <Wrapper space={20}/>
                <FieldWrapper>
                    <FieldDescriptor left={"left"}>Email</FieldDescriptor>
                    <TextInputField icon={<FiMail/>} name="email" type="text" label="email" placeholder="email address"/>
                 </FieldWrapper>
                 <Wrapper space={20}/>
                 <ButtonWrapper>
                     <Button type="submit" colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Send Email</Button>
                 </ButtonWrapper>
           </FormWrapper>
       </div>
    )
}

export default ResetPassword;