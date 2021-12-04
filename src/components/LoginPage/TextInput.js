import React, { useState } from "react";
import { StyledTextInput, StyledLabel } from "./LoginStyles";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Icon } from "./LoginStyles";
import { Wrapper } from "../StyledTitle";


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
       </div>
    )
}

export default TextInputField;