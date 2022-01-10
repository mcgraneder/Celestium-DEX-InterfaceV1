import React, { useState, useEffect } from "react";
import Web3 from "web3"
import Fortmatic from 'fortmatic';
import Portis from "@portis/web3"
import Torus from "@toruslabs/torus-embed";
import { ethers } from "ethers";
import axios from "axios";
import { ErrorMsg } from "./LoginStyles";
import Loader from "react-loader-spinner";

import WalletConnectProvider from "@walletconnect/web3-provider"
import { StyledTitle } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import { LogoStyles } from "../LogoStyles";
import { ButtonWrapper, ButtonStatic } from "../ButtomStyles";
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

    var web3;
    var publicAddress
    var provider1;

    useEffect(() => {

        if (localStorage.getItem("authToken")) {

            history.push("/trade");
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
        setText("Logging In!")

        if(localStorage.getItem("provider") === "fortmatic") {

            const fm = new Fortmatic('pk_test_C102027C0649EF66');
            window.web3 = new Web3(fm.getProvider());
            web3 = window.web3
        }

        else if(localStorage.getItem("provider") === "portis") {

            const portis = new Portis("10c2a4ba-93fc-46d3-8c27-9b9019bea48f", "rinkeby");
            web3 = new Web3(portis.provider);

            
        }
        else if(localStorage.getItem("provider") === "torus") {

            const torus = new Torus()
            await torus.init();
            await torus.login(); 
            web3 = new Web3(torus.provider);

        }
        else if (localStorage.getItem("provider") === "walletconnect") {

            provider1 = new WalletConnectProvider({
                infuraId: "ba5ee6592e68419cab422190121eca4c",
            });
              
            await provider1.enable();
            web3 = new Web3(provider1);

        }
        else {

            web3 = new Web3(window.ethereum);
        }


        const coinbase = await web3.eth.getAccounts();
        if (!coinbase) {
            window.alert('Please activate MetaMask first.');
            return;
        }

        publicAddress = coinbase[0].toLowerCase();
        await web3.eth.getCoinbase().then(async (users) => {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            try {

                const {data} = await axios.post("https://alpha-baetrum.herokuapp.com/api/users/nonce", {publicAddress, email, password }, config);
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
    
                    const {data} = await axios.post("https://alpha-baetrum.herokuapp.com/api/auth/login", {signature, nonce, publicAddress, email, password}, config);
                    setText("Success!")

                    localStorage.setItem("authToken", data.token);
                    localStorage.removeItem("firstTimeAccess")
                    localStorage.removeItem("registered")
                    localStorage.setItem("email", email)

                    setTimeout(() => {
    
                        history.push("/trade");
    
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
       <StyledContainer>
             <LoginModal visible={show1} close={toggle1}></LoginModal>
           <FormWrapper>
               <form >
                <ReturnHomeButton to="/"><BsArrowReturnLeft style={{"paddingTop": "15px"}}/></ReturnHomeButton>
                    <LogoStyles image={Logo} width={150} height={150}/>
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
                        {loading ? <Loader type="ThreeDots" color={`rgb(22,181,127)`} height={50} width={100}/> : <ButtonStatic type="submit" onClick={loginHandler} colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Login</ButtonStatic>}
                    </ButtonWrapper>
                    <Wrapper space={12}/>
                    <LoginLinkWrapper>New Here? <LoginLink to="/signup" style={{textDecoration:"none"}}> Register</LoginLink></LoginLinkWrapper>
               </form>
           </FormWrapper>
       </StyledContainer>
    )
}

export default Login;