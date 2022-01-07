import React, { useState, useEffect } from "react";
import { FormWrapper, FieldWrapper, LoginLinkWrapper, LoginLink, FieldDescriptor, ReturnHomeButton } from "./ForgotPasswordStyles";
import { StyledTitle } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import { LogoStyles } from "../LogoStyles";
import { ButtonWrapper, ButtonStatic } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import { FiMail } from "react-icons/fi";
import {BsArrowReturnLeft } from "react-icons/bs"
import { StyledLabel } from "./ForgotPasswordStyles";
import { StyledTextInput } from "./ForgotPasswordStyles";
import { Icon } from "./ForgotPasswordStyles";
import axios from "axios";
import { ErrorMsg } from "./ForgotPasswordStyles";
import Loader from "react-loader-spinner";
import { StyledContainer } from "../StyledContainer";


const ForgotPassword = ({history}) => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    useEffect(() => {

        if (localStorage.getItem("provider") == null || localStorage.getItem("provider") == undefined) {

            history.push("/")
        }

    }, [history])

    const forgotPasswordHandler = async (e) => {

        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {

            const {data} = await axios.post("https://alpha-baetrum.herokuapp.com/api/auth/forgotpassword", {email}, config);
            setLoading(true);
            console.log(loading);
            setTimeout(() => {

                setSuccess(data.data);
                setLoading(false);

            }, 2000)
           

        } catch(error) {

            setError(error.response.data.error);
            setTimeout(() => {

                setError("");

            }, 5000)
        }
    }

    return (
        <StyledContainer>
            <FormWrapper>
                <form >
                 <ReturnHomeButton to="/login"><BsArrowReturnLeft style={{"paddingTop": "15px"}}/></ReturnHomeButton>
                     <LogoStyles image={Logo} width={150} height={150}/>
                     {success ? <StyledTitle color={"white"} size={30} align={"center"}>
                        Success! Please Check Your Email For The Reset Link
                     </StyledTitle> : <StyledTitle color={"white"} size={30} align={"center"}>
                         Enter Your Email To Receive A New Password
                     </StyledTitle>}
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
                     </FieldWrapper>
                     <Wrapper space={40}/>
                     <ButtonWrapper>
                         {loading ? <Loader type="ThreeDots" color={`rgb(22,181,127)`} height={50} width={100}/> : <ButtonStatic type="submit" onClick={forgotPasswordHandler} colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Send Email</ButtonStatic>}
                     </ButtonWrapper>
                     <Wrapper space={12}/>
                     <LoginLinkWrapper>Back to login? <LoginLink to="/login" style={{textDecoration:"none"}}> Login</LoginLink></LoginLinkWrapper>
                </form>
            </FormWrapper>
        </StyledContainer>
     )
}

export default ForgotPassword;