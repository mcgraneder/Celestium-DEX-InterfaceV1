import React from "react";
import { FormWrapper, FieldWrapper, LoginLinkWrapper, LoginLink, FieldDescriptor, ReturnHomeButton } from "./LoginStyles";
import { StyledTitle } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import { LogoStyles } from "../LogoStyles";
import { Button, ButtonWrapper } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import { FiMail, FiLock } from "react-icons/fi";
import {BsArrowReturnLeft } from "react-icons/bs"
import TextInputField from "./TextInput";

const Login = () => {

    return (
       <div>
           <FormWrapper>
                <ReturnHomeButton to="/"><BsArrowReturnLeft style={{"padding-top": "15px"}}/></ReturnHomeButton>
                <LogoStyles image={Logo} width={150} height={150}/>
                <StyledTitle color={"white"} size={30}>
                    Login To Start Trading
                </StyledTitle>
                <Wrapper/>
                <Wrapper space={50}/>
                <FieldWrapper>
                    <FieldDescriptor left={"left"}>Email</FieldDescriptor>
                    <TextInputField icon={<FiMail/>} name="email" type="text" label="email" placeholder="Enter your email"/>
                    <FieldDescriptor left={"left"}>Password</FieldDescriptor>
                    <TextInputField icon={<FiLock/>} placeholder="password" name="text" type="password"/>
                    <FieldDescriptor size={12} left={"center"} style={{color: "rgb(22,181,127)"}}><LoginLink to="/passwordreset" style={{textDecoration:"none"}}>Forgot Password</LoginLink></FieldDescriptor>
                 </FieldWrapper>
                 <Wrapper space={20}/>
                 <ButtonWrapper>
                     <Button type="submit" colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Login</Button>
                 </ButtonWrapper>
                 <Wrapper space={12}/>
                 <LoginLinkWrapper>New Here? <LoginLink to="/signup" style={{textDecoration:"none"}}> Register</LoginLink></LoginLinkWrapper>

           </FormWrapper>
       </div>
    )
}

export default Login;