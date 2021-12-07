import React, { useState } from "react";
import { StyledTextInput, StyledLabel } from "./LoginStyles";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Icon } from "./LoginStyles";
import { Wrapper } from "../StyledTitle";


const TextInputField = ({icon, name, type, label, placeholder, value }) => {

    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");

    const han = (arg) => {

        setUsername(arg);
        console.log(username)
    }

    //just wriye this in main login

    return (
       <div style={{position: "relative"}}>
           
                <StyledLabel></StyledLabel>
                {
                    type != "password" &&
                    <StyledTextInput name={name} type="text" label={label} value={username} onChange={(e) => han(e.target.value)} placeholder={placeholder}></StyledTextInput>

                }
               
                {
                    type === "password" && 
                    <StyledTextInput name={name} type={show ? "text" : "password"} label={label} value={username} onChange={(e) => han(e.target.value)} placeholder={placeholder}></StyledTextInput>
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