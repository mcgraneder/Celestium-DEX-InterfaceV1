import React, { useState } from "react";
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

    const [username, setUsername] = useState("")

    const handle = () => {

        console.log(username);
    }
    return (
       <div>
           <FormWrapper>
               
                <ReturnHomeButton to="/"><BsArrowReturnLeft style={{"paddingTop": "15px"}}/></ReturnHomeButton>
                <LogoStyles image={Logo} width={150} height={150}/>
                <StyledTitle color={"white"} size={30}>
                    Login To Start Trading
                </StyledTitle>
                <Wrapper space={20}/>
                <FieldWrapper>
                    <FieldDescriptor left={"left"}>Email</FieldDescriptor>
                    <TextInputField icon={<FiMail/>} name="email" type="text" label="email" placeholder="Enter your email"/>
                    <FieldDescriptor left={"left"}>Password</FieldDescriptor>
                    <TextInputField icon={<FiLock/>} placeholder="password" name="text" type="password"/>
                    <FieldDescriptor size={10} left={"center"} style={{color: "rgb(22,181,127)"}}><LoginLink to="/passwordreset" style={{textDecoration:"none", "font-size": "12px"}}>Forgot Password</LoginLink></FieldDescriptor>
                </FieldWrapper>
                <Wrapper space={20}/>
                <ButtonWrapper>
                    <Button type="submit" onSubmit={handle()} colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Login</Button>
                </ButtonWrapper>
                <Wrapper space={12}/>
                <LoginLinkWrapper>New Here? <LoginLink to="/signup" style={{textDecoration:"none"}}> Register</LoginLink></LoginLinkWrapper>

           </FormWrapper>
       </div>
    )
}

export default Login;