import React, { useState, useContext } from "react";

import { StyledTextInput, StyledLabel, FormButton, FormWrapper, FieldWrapper, LoginLinkWrapper, LoginLink } from "./LoginStyles";
import { StyledTitle, StyledSubTitle } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import { colours } from "../StyledContainer";
import { LogoStylesWrapper, LogoStyles } from "../LogoStyles";
import { ParticlesOptions } from "tsparticles/Options/Classes/Particles/ParticlesOptions";
import { Button, ButtonWrapper } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Icon } from "./LoginStyles";


const TextInputField = ({icon, name, type, label, placeholder }) => {

    const [show, setShow] = useState(false);

    return (
       <div style={{position: "relative"}}>
           
                <StyledLabel></StyledLabel>
                {
                    type != "password" &&
                    <StyledTextInput name={name} type="text" label={label} placeholder={placeholder}></StyledTextInput>

                }
               
                {
                    type === "password" && 
                    <StyledTextInput name={name} type={show ? "text" : "password"} label={label} placeholder={placeholder}></StyledTextInput>
                }

                <Wrapper space={20}/>
                <Icon left>{icon}</Icon>

                {
                    type === "password" && 
                    <Icon onClick={() => setShow(!show)} right>
                        {show && <FiEye/>}
                        {!show && <FiEyeOff/>}
                    </Icon>
                }
                {/* <StyledTextInput name="password" type="password" label="Password" placeholder="**********"></StyledTextInput>
                <Icon>{icon}</Icon> */}
       </div>
    )
}

export default TextInputField;