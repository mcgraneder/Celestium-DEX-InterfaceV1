import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledTextInput, StyledLabel, FormButton, FormWrapper, FieldWrapper, LoginLinkWrapper, LoginLink } from "./LoginStyles";
import { StyledTitle, StyledSubTitle } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import { colours } from "../StyledContainer";
import { LogoStylesWrapper, LogoStyles } from "../LogoStyles";
import { ParticlesOptions } from "tsparticles/Options/Classes/Particles/ParticlesOptions";
import { Button, ButtonWrapper } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import { FiMail, FiLock } from "react-icons/fi";
import { Icon } from "./LoginStyles";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import TextInputField from "./TextInput";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);


    const handleSubmit = async () => {

        setError(false);
        try {

            
            console.log("Hello");

        } catch (err) {

            setError(true);
        }
    };

    const handleInput = e => {

        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);

    };

    //need to pass in props of each form for password or rmsil fix ccss

    return (
       <div>
           <FormWrapper>
                <LogoStyles image={Logo} width={150} height={150}/>
                <StyledTitle color={"white"} size={30}>
                    Login To Start Trading
                </StyledTitle>
                <Wrapper/>
                <Wrapper space={50}/>
                <FieldWrapper>
                    <TextInputField icon={<FiMail/>} name="email" type="text" label="email" placeholder="email address"/>
                    <TextInputField icon={<FiLock/>} placeholder="password" name="text" type="password"/>
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