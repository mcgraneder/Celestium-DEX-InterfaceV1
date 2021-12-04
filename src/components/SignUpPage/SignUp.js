import React from "react";
import { FormWrapper, FieldWrapper, LoginLink, LoginLinkWrapper, FieldDescriptor, ReturnHomeButton } from "./SignUpStyles";
import { StyledTitle, } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import { LogoStyles } from "../LogoStyles";
import { Button, ButtonWrapper } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import { FiMail, FiLock, FiUser} from "react-icons/fi";
import {BsArrowReturnLeft } from "react-icons/bs"
import TextInputField from "../LoginPage/TextInput";

const SignUp = () => {

    return (
       <div>
           <FormWrapper>
                <ReturnHomeButton to="/"><BsArrowReturnLeft style={{"padding-top": "15px"}}/></ReturnHomeButton>
                <LogoStyles image={Logo} width={150} height={150}/>
                <StyledTitle color={"white"} size={30}>
                    Sign Up To Start Trading
                </StyledTitle>
                <Wrapper/>
                <Wrapper space={50}/>
                <FieldWrapper>
                    <FieldDescriptor>Username</FieldDescriptor>
                    <TextInputField icon={<FiUser/>} name="email" type="text" label="email" placeholder="Username"/>
                    <FieldDescriptor>Email</FieldDescriptor>
                    <TextInputField icon={<FiMail/>} name="email" type="text" label="email" placeholder="email address"/>
                    <FieldDescriptor>Password</FieldDescriptor>
                    <TextInputField icon={<FiLock/>} placeholder="password" name="text" type="password"/>
                 </FieldWrapper>
                 <Wrapper space={20}/>
                 <ButtonWrapper>
                     <Button type="submit" colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>SignUp</Button>
                 </ButtonWrapper>
                 <Wrapper space={12}/>
                 <LoginLinkWrapper>Already Registered? <LoginLink to="/login" style={{textDecoration:"none"}}> Login</LoginLink></LoginLinkWrapper>

           </FormWrapper>
       </div>
    )
}

export default SignUp;