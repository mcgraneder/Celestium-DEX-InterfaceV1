import React, { useState, useEffect } from "react";
import { FormWrapper, FieldWrapper, LoginLinkWrapper, LoginLink, FieldDescriptor, ReturnHomeButton } from "./LoginStyles";
import { StyledTitle } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import { LogoStyles } from "../LogoStyles";
import { ButtonWrapper, ButtonStatic } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import {BsArrowReturnLeft } from "react-icons/bs"
import { StyledLabel } from "./LoginStyles";
import { StyledTextInput } from "./LoginStyles";
import { Icon } from "./LoginStyles";
import axios from "axios";
import { ErrorMsg } from "./LoginStyles";
import Loader from "react-loader-spinner";
import { StyledContainer } from "../StyledContainer";

const Login = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (localStorage.getItem("authToken")) {

            history.push("/trade");
        }
    }, [history])

    const loginHandler = async (e) => {

        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        console.log(email);
        console.log(password)

        try {

            const {data} = await axios.post("/api/auth/login", {email, password}, config);
            console.log(data)
            setLoading(true);
            localStorage.setItem("authToken", data.token);
            console.log(loading);
            setTimeout(() => {

                history.push("/trade");

            }, 1000)
            

        } catch(error) {

            setError(error.response.data.error);
            setTimeout(() => {

                setError("");

            }, 3000)
        }
    }

    return (
       <StyledContainer>
           <FormWrapper>
               <form >
                <ReturnHomeButton to="/"><BsArrowReturnLeft style={{"paddingTop": "15px"}}/></ReturnHomeButton>
                    <LogoStyles image={Logo} width={150} height={150}/>
                    <StyledTitle color={"white"} size={30} align={"center"}>Login To Start Trading</StyledTitle>
                    <Wrapper space={5}/>
                    {error && <ErrorMsg>{error}</ErrorMsg>}   
                    <Wrapper space={40}/>
                    <FieldWrapper>
                        <FieldDescriptor left={"left"}>Email</FieldDescriptor>
                        <div style={{position: "relative"}}>
                            <StyledLabel></StyledLabel>
                            <StyledTextInput name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"></StyledTextInput>
                            <Wrapper space={20}/>
                            <Icon left>{<FiMail/>}</Icon>
                        </div>
                        <FieldDescriptor left={"left"}>Password</FieldDescriptor>
                        <div style={{position: "relative"}}>
                            <StyledLabel></StyledLabel>
                            <StyledTextInput name="password" type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"></StyledTextInput>
                            <Wrapper space={20}/>
                            <Icon left>{<FiLock/>}</Icon>
                            <Icon onClick={() => setShow(!show)} right>
                                {show && <FiEye/>}
                                {!show && <FiEyeOff/>}
                            </Icon>                      
                        </div>
                        <FieldDescriptor size={10} left={"center"} style={{color: "rgb(22,181,127)"}}><LoginLink to="/forgotpassword" style={{textDecoration:"none", "fontSize": "12px"}}>Forgot Password</LoginLink></FieldDescriptor>
                    </FieldWrapper>
                    <Wrapper space={50}/>
                    <ButtonWrapper>
                        {loading ? <Loader type="ThreeDots" color={`rgb(22,181,127)`} height={50} width={100}/> : <ButtonStatic type="submit" onClick={loginHandler} colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Login</ButtonStatic>}
                    </ButtonWrapper>
                    <Wrapper space={12}/>
                    <LoginLinkWrapper>New Here? <LoginLink to="/signup" style={{textDecoration:"none"}}> Register</LoginLink></LoginLinkWrapper>
               </form>
           </FormWrapper>
       </StyledContainer>
    )
}

export default Login;