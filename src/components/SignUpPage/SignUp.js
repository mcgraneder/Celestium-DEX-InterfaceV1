import React, { useState, useEffect } from "react";import Web3 from 'web3';
import axios from "axios";
import Fortmatic from 'fortmatic';
import Portis from "@portis/web3"
import Torus from "@toruslabs/torus-embed";
import WalletConnectProvider from "@walletconnect/web3-provider"
import { ethers } from "ethers";
import { StyledTitle, } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import Log from "../../assets/logo_transparent_background1.png"
import { LogoStyles } from "../LogoStyles";
import { ButtonWrapper, ButtonStatic, ButtonLoading } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import { FiMail, FiLock, FiUser} from "react-icons/fi";
import {BsArrowReturnLeft } from "react-icons/bs"
import { StyledLabel } from "./SignUpStyles";
import { StyledTextInput } from "./SignUpStyles";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Icon } from "./SignUpStyles";
import { ErrorMsg } from "./SignUpStyles";
import Loader from "react-loader-spinner";
import { StyledContainer } from "../StyledContainer";
import useAuth from "../../hooks/useAuth";
import { FormWrapper, 
         FieldWrapper, 
         LoginLink, 
         LoginLinkWrapper, 
         FieldDescriptor, 
         ReturnHomeButton 
} from "./SignUpStyles";
import Nav2 from "../Navbar/Nav2";

const SignUp = ({ history }) => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("Sign Up To Start Trading")
    const [colour, setColour] = useState("rgb(22,181,127)");
    const [web3, setWeb3] = useState()
    var web32
    const {active, account, library, onPageLoading,  connectOn} = useAuth()
    const provider = localStorage.getItem("provider")
   

    var publicAddress
    var provider1;

    useEffect(() => {

        if(active) {
          
           setWeb3(library)
        }
       
    }, [active, library])
    const nonce = Math.floor(Math.random() * 10000)
    var provider1
    var publicAddress 
   
    useEffect(() => {

        if (localStorage.getItem("authToken")) {

            history.push("/trade");
        }

        if (localStorage.getItem("provider") == null || localStorage.getItem("provider") == undefined) {

            history.push("/")
        }

    }, [history])

    const handleSignMessage = async (publicAddress, nonce) => {

        var signature;
        
		try {

            if (localStorage.getItem("provider") === "walletconnect") {

                provider1 = new WalletConnectProvider({
                    infuraId: "ba5ee6592e68419cab422190121eca4c",
                });
        
                await provider1.enable();
                
                setWeb3(new Web3(provider1))

                signature = await provider1.send(
                    'personal_sign',
                    [ ethers.utils.hexlify(ethers.utils.toUtf8Bytes(`Alpha-Baetrum Onboarding unique one-time nonce: ${nonce} by signimg this you are verifying your ownership of this wallet`)), publicAddress ]
                );
                
            }
            else {
                signature = await web3.eth.personal.sign(
                    `Alpha-Baetrum Onboarding unique one-time nonce: ${nonce} by signimg this you are verifying your ownership of this wallet`,
                    publicAddress,
                    ''
                );
            }
            
			return { signature };

		} catch (error) {

            setLoading(false);
            setText("Sign Up To Start Trading")
			setColour("red")
            setTimeout(() => {

                setError("");
                setColour("rgb(22,181,127)")

            }, 5000)
    
		}
	};


    const registerHandler = async (e) => {

        e.preventDefault()
        
        setText("Creating Account!")
        
              
        publicAddress = account.toLocaleLowerCase();
        console.log(publicAddress)
        await web3.eth.getAccounts().then(async (users) => {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            try {

                const {data} = await axios.post("http://127.0.0.1:5000/api/users/publicAddress", {publicAddress, username, email, password}, config);
                setLoading(true);
                setText("Please Verify Your Wallet!")
                console.log(data)  

            } catch(error) {

                setLoading(false);
                setText("Sign Up To Start Trading")
                setError(error.response.data.error);
                setColour("red")
                setTimeout(() => {
    
                    setError("");
                    setColour("rgb(22,181,127)")
    
                }, 5000)

                return error
            }
            
        }).then((res) => {


            if(res != null) return
            console.log(publicAddress)
        
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
    
            try {
    
                handleSignMessage(publicAddress, nonce).then(async function(signature) {
    
                    const {data} = await axios.post("http://127.0.0.1:5000/api/auth/register", {signature, nonce, publicAddress, username, email, password}, config);
                    console.log(data);
                    setText("Success!")
                    localStorage.setItem("firstTimeAccess", true);
                    localStorage.setItem("authToken", data.token);
                    localStorage.removeItem("registered")
                    localStorage.setItem("email", email)

                    setTimeout(() => {
    
                        history.push("/trade");
    
                    }, 1000)
                })
    
            } catch(error) {
    
                setLoading(false);
                setText("Sign Up To Start Trading")
                setError(error.response.data.error);
                setColour("red")
                setTimeout(() => {
    
                    setError("");
                    setColour("rgb(22,181,127)")
    
                }, 5000)
            }

        })
        
    }

    return (
        <>
         <Nav2 close={toggle1}/>
      
       <StyledContainer>
           <FormWrapper>
                <ReturnHomeButton to="/"><BsArrowReturnLeft style={{"paddingTop": "15px"}}/></ReturnHomeButton>
                <LogoStyles image={Log} width={110} height={110}/>
                <StyledTitle color={"white"} size={30} align={"center"}>{text}</StyledTitle>
                <Wrapper space={5}/>
                {error && <ErrorMsg>{error}</ErrorMsg>}   
                <Wrapper space={20}/>
                <FieldWrapper>
                    <FieldDescriptor left={"left"}>Username</FieldDescriptor>
                    <div style={{position: "relative"}}>
                        <StyledLabel></StyledLabel>
                        <StyledTextInput colour={colour} type="text" required id="name" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></StyledTextInput>
                        <Wrapper space={20}/>
                        <Icon left>{<FiUser/>}</Icon>
                    </div>
                    <FieldDescriptor left={"left"}>Email</FieldDescriptor>
                    <div style={{position: "relative"}}>
                        <StyledLabel></StyledLabel>
                        <StyledTextInput colour={colour} type="email" required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"></StyledTextInput>
                        <Wrapper space={20}/>
                        <Icon left>{<FiMail/>}</Icon>
                    </div>
                    <FieldDescriptor left={"left"}>Password</FieldDescriptor>
                    <div style={{position: "relative"}}>
                        <StyledLabel></StyledLabel>
                        <StyledTextInput colour={colour} name="password" type={show ? "text" : "password"} required id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"></StyledTextInput>    
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
                        {!active ? (!onPageLoading ? <ButtonLoading colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`} onClick={() => connectOn(provider)}>Connect Wallet</ButtonLoading> : <ButtonLoading colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Connecting...</ButtonLoading>) : (loading ? <Loader type="ThreeDots" color={`rgb(22,181,127)`} height={50} width={100}/> : <ButtonStatic type="submit" onClick={registerHandler} colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Sign Up</ButtonStatic>)}
                    </ButtonWrapper>
                 <Wrapper space={12}/>
                 <LoginLinkWrapper>Already Registered? <LoginLink to="/login" style={{textDecoration:"none"}}> Login</LoginLink></LoginLinkWrapper>
           </FormWrapper>
       </StyledContainer>
       </>
    )
}

export default SignUp;