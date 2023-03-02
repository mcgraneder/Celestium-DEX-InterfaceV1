import React, { useState, useEffect, useRef } from "react";
import Web3 from "web3"
import Fortmatic from 'fortmatic';
import Portis from "@portis/web3"
import Torus from "@toruslabs/torus-embed";
import { ethers } from "ethers";
import axios from "axios";
import { ErrorMsg } from "./LoginStyles";
import Loader from "react-loader-spinner";
import Log from "../../assets/logo_transparent_background1.png"
import WalletConnectProvider from "@walletconnect/web3-provider"
import { StyledTitle } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import { LogoStyles } from "../LogoStyles";
import { ButtonWrapper, ButtonStatic, ButtonLoading } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import {BsArrowReturnLeft } from "react-icons/bs"
import { StyledLabel } from "./LoginStyles";
import { StyledTextInput } from "./LoginStyles";
import { Icon } from "./LoginStyles";
import { StyledContainer } from "../StyledContainer";
import LoginModal from "../LoginModal/LoginModal";
import { FormWrapper, 
         FieldWrapper, 
         LoginLinkWrapper, 
         LoginLink, 
         FieldDescriptor, 
         ReturnHomeButton 
} from "./LoginStyles";
import useProvider from "../../hooks/useProvider";
import { useWeb3React } from "@web3-react/core";
import useAuth from "../../hooks/useAuth";
import Nav2 from "../Navbar/Nav2";

import Web3Status from "../../connectors/web3Status";

const Login = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("Login To Start Trading")
    const [colour, setColour] = useState("rgb(22,181,127)")
    const [web3, setWeb3] = useState()
    var web32
    const {active, account, library, onPageLoading,  connectOn} = useAuth()
    // const {library, provider} = useWeb3React()
   const provider = localStorage.getItem("provider")

   
//    localStorage.setItem("authToken", 1234);
    var publicAddress
    var provider1;

    useEffect(() => {

        if(active) {
          
           setWeb3(library)
        }
       
    }, [active, library])

    

    useEffect(() => {

        if (localStorage.getItem("authToken")) {

            history.push("/wallet");
        }

        if(localStorage.getItem("firstTimeAccess")) {

            toggle1()
        }

        if (localStorage.getItem("provider") == null || localStorage.getItem("provider") == undefined) {

            history.push("/")
        }

    }, [history])

    const handleSignMessage = async (publicAddress, nonce) => {
		var signature;
		try {

            
            if (localStorage.getItem("provider") == "walletconnect") {

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
            setText("Login To Start Trading")
			setError("Denied! You must Confirm Your wallet To Login");
            setColour("red")
            setTimeout(() => {

                setError("");
                setColour("rgb(22,181,127)")

            }, 5000)
		}
	};

    const loginHandler = async (e) => {

        e.preventDefault()
       
        setText("Logging In. Please Wait!")
        
        
              
        publicAddress = account.toLocaleLowerCase();
        console.log(publicAddress)
        await web3.eth.getAccounts().then(async (users) => {

            console.log(users)
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            try {

                const { data } = await axios.post(
                  "https://ecdsabackend.onrender.com/api/users/nonce",
                  { publicAddress, email, password },
                  config
                );
                setLoading(true);
                setText("Please Verify Your Wallet!")
    
                return data

            } catch(error) {

                setError(error.response.data.error);
                setColour("red")
                setTimeout(() => {
    
                    setError("");
                    setColour("rgb(22,181,127)")
    
                }, 5000)

                return error
            }

        }).then((res) => {

            if(res.success != true) return
            const nonce = res.nonce

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
    
            try {
    
                handleSignMessage(publicAddress, nonce).then(async function(signature) {
    
                    const { data } = await axios.post(
                      "https://ecdsabackend.onrender.com/api/auth/login",
                      { signature, nonce, publicAddress, email, password },
                      config
                    );
                    setText("Success!")

                    localStorage.setItem("authToken", data.token);
                    localStorage.removeItem("firstTimeAccess")
                    localStorage.removeItem("registered")
                    localStorage.setItem("email", email)

                    setTimeout(() => {
    
                        history.push("/wallet");
    
                    }, 1000)
                })
    
            } catch(error) {
    
                setLoading(false);
                setText("Login To Start Trading")
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
           
             <LoginModal visible={show1} close={toggle1}></LoginModal>
           <FormWrapper>
               <form >
                <ReturnHomeButton to="/"><BsArrowReturnLeft/></ReturnHomeButton>
                    <LogoStyles image={Log} width={110} height={110}/>
                    <StyledTitle color={"white"} size={30} align={"center"}>{text}</StyledTitle>
                    <Wrapper space={5}/>
                    {error && <ErrorMsg>{error}</ErrorMsg>}   
                    <Wrapper space={20}/>
                    <FieldWrapper>
                        <FieldDescriptor left={"left"}>Email</FieldDescriptor>
                        <div style={{position: "relative"}}>
                            <StyledLabel></StyledLabel>
                            <StyledTextInput colour={colour} name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"></StyledTextInput>
                            <Wrapper space={20}/>
                            <Icon left>{<FiMail/>}</Icon>
                        </div>
                        <FieldDescriptor left={"left"}>Password</FieldDescriptor>
                        <div style={{position: "relative"}}>
                            <StyledLabel></StyledLabel>
                            <StyledTextInput colour={colour} name="password" type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"></StyledTextInput>
                            <Wrapper space={20}/>
                            <Icon left>{<FiLock/>}</Icon>
                            <Icon onClick={() => setShow(!show)} right>
                                {show && <FiEye/>}
                                {!show && <FiEyeOff/>}
                            </Icon>                      
                        </div>
                        <FieldDescriptor size={10} left={"center"} style={{color: "rgb(22,181,127)"}}><LoginLink to="/forgotpassword" style={{textDecoration:"none", "fontSize": "12px"}}>Forgot Password</LoginLink></FieldDescriptor>
                    </FieldWrapper>
                    <Wrapper space={40}/>
                    <ButtonWrapper>
                        {!active ? (!onPageLoading ? <ButtonLoading colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`} onClick={() => connectOn(provider)}>Connect Wallet</ButtonLoading> : <ButtonLoading colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Connecting...</ButtonLoading>) : (loading ? <Loader type="ThreeDots" color={`rgb(22,181,127)`} height={50} width={100}/> : <ButtonStatic type="submit" onClick={loginHandler} colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Login</ButtonStatic>)}
                    </ButtonWrapper>
                    <Wrapper space={12}/>
                    <LoginLinkWrapper>New Here? <LoginLink to="/signup" style={{textDecoration:"none"}}> Register</LoginLink></LoginLinkWrapper>
               </form>
           </FormWrapper>
       </StyledContainer>
       </>
    )
}

export default Login;