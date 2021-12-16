import React, { useState, useEffect } from "react";
import { FormWrapper, FieldWrapper, LoginLink, LoginLinkWrapper, FieldDescriptor, ReturnHomeButton } from "./SignUpStyles";
import { StyledTitle, } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import { LogoStyles } from "../LogoStyles";
import { Button, ButtonWrapper, ButtonStatic } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import { FiMail, FiLock, FiUser} from "react-icons/fi";
import {BsArrowReturnLeft } from "react-icons/bs"
import { StyledLabel } from "./SignUpStyles";
import { StyledTextInput } from "./SignUpStyles";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Icon } from "./SignUpStyles";
import axios from "axios";
import { ErrorMsg } from "./SignUpStyles";
import Loader from "react-loader-spinner";
import { StyledContainer } from "../StyledContainer";


const SignUp = ({ history }) => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (localStorage.getItem("authToken")) {

            history.push("/trade");
        }

    }, [history])

    const registerHandler = async (e) => {

        // e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        console.log(username);

        try {

            const {data} = await axios.post("/api/auth/register", {username, email, password}, config);
            setLoading(true);
            localStorage.setItem("authToken", data.token);
            console.log(loading);
            setTimeout(() => {

                history.push("/trade");

            }, 1000)

        } catch(error) {

            console.log(error.response)
            setError(error.response.data.error);
            setTimeout(() => {

                setError("");

            }, 5000)
        }
    }

    return (
       <StyledContainer>
           <FormWrapper style={{position: "relative"}}>
                <ReturnHomeButton to="/"><BsArrowReturnLeft style={{"paddingTop": "15px"}}/></ReturnHomeButton>
                <LogoStyles image={Logo} width={150} height={150}/>
                <StyledTitle color={"white"} size={30} align={"center"}>Sign Up To Start Trading</StyledTitle>
                <Wrapper space={5}/>
                {error && <ErrorMsg>{error}</ErrorMsg>}   
                <Wrapper space={40}/>
                <FieldWrapper>
                    <FieldDescriptor left={"left"}>Username</FieldDescriptor>
                    <div style={{position: "relative"}}>
                        <StyledLabel></StyledLabel>
                        <StyledTextInput type="text" required id="name" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></StyledTextInput>
                        <Wrapper space={20}/>
                        <Icon left>{<FiUser/>}</Icon>
                    </div>
                    <FieldDescriptor left={"left"}>Email</FieldDescriptor>
                    <div style={{position: "relative"}}>
                        <StyledLabel></StyledLabel>
                        <StyledTextInput type="email" required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"></StyledTextInput>
                        <Wrapper space={20}/>
                        <Icon left>{<FiMail/>}</Icon>
                    </div>
                    <FieldDescriptor left={"left"}>Password</FieldDescriptor>
                    <div style={{position: "relative"}}>
                        <StyledLabel></StyledLabel>
                        <StyledTextInput name="password" type={show ? "text" : "password"} required id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"></StyledTextInput>    
                        <Wrapper space={20}/>
                        <Icon left>{<FiLock/>}</Icon>
                        <Icon onClick={() => setShow(!show)} right>
                            {show && <FiEye/>}
                            {!show && <FiEyeOff/>}
                        </Icon>                   
                    </div>
                 </FieldWrapper>
                 <Wrapper space={50}/>
                 <ButtonWrapper>
                        {loading ? <Loader type="ThreeDots" color={`rgb(22,181,127)`} height={50} width={100}/> : <ButtonStatic type="submit" onClick={registerHandler} colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Sign Up</ButtonStatic>}
                    </ButtonWrapper>
                 <Wrapper space={12}/>
                 <LoginLinkWrapper>Already Registered? <LoginLink to="/login" style={{textDecoration:"none"}}> Login</LoginLink></LoginLinkWrapper>
           </FormWrapper>
       </StyledContainer>
    )
}

export default SignUp;