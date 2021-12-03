import React, { useState, useContext } from "react";

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


const TextInputField = ({icon}) => {

    return (
       <div style={{position: "relative"}}>
           
                <StyledLabel></StyledLabel>
                <StyledTextInput name="email" type="text" label="Email Address" placeholder="example-email@example.com"></StyledTextInput>
                <Wrapper space={20}/>
                <Icon>{icon}</Icon>
                <StyledTextInput name="password" type="password" label="Password" placeholder="**********"></StyledTextInput>
                <Icon>{icon}</Icon>
       </div>
    )
}

export default TextInputField;