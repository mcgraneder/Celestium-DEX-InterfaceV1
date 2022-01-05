import React, { useState } from "react";
import { FormWrapper, FieldWrapper, LoginLinkWrapper, LoginLink, FieldDescriptor, ReturnHomeButton } from "./ResetPasswordStyles";
import { StyledTitle } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import { LogoStyles } from "../LogoStyles";
import { ButtonWrapper, ButtonStatic } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import {BsArrowReturnLeft } from "react-icons/bs"
import { StyledLabel } from "./ResetPasswordStyles";
import { StyledTextInput } from "./ResetPasswordStyles";
import { Icon } from "./ResetPasswordStyles";
import axios from "axios";
import { ErrorMsg } from "./ResetPasswordStyles";
import Loader from "react-loader-spinner";
import { StyledContainer } from "../StyledContainer";


const ResetPassword = ({ match }) => {

    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const resetPasswordHandler = async (e) => {

        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {

            const {data} = await axios.put(`https://alpha-baetrum.herokuapp.com/api/auth/passwordreset/${match.params.resetToken}`, {password}, config);
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
                     {success ? <StyledTitle color={"white"} size={30} align={"center"}>Success! You Can Now Login</StyledTitle> : <StyledTitle color={"white"} size={30} align={"center"}>Enter Your New Password</StyledTitle>}
                     <Wrapper space={5}/>
                     {error && <ErrorMsg>{error}</ErrorMsg>}   
                     <Wrapper space={40}/>
                     <FieldWrapper>
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
                        </FieldWrapper>
                     <Wrapper space={40}/>
                     <ButtonWrapper>
                         {loading ? <Loader type="ThreeDots" color={`rgb(22,181,127)`} height={50} width={100}/> : <ButtonStatic type="submit" onClick={resetPasswordHandler} colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Confirm</ButtonStatic>}
                     </ButtonWrapper>
                     <Wrapper space={12}/>
                     <LoginLinkWrapper>Back to login? <LoginLink to="/login" style={{textDecoration:"none"}}>Click Here</LoginLink></LoginLinkWrapper>
                </form> 
            </FormWrapper>
        </StyledContainer>
     )
}

export default ResetPassword;