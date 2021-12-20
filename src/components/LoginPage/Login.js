import React, { useState, useEffect } from "react";
import { FormWrapper, FieldWrapper, LoginLinkWrapper, LoginLink, FieldDescriptor, ReturnHomeButton } from "./LoginStyles";
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
import axios from "axios";
import { ErrorMsg } from "./LoginStyles";
import Loader from "react-loader-spinner";
import { StyledContainer } from "../StyledContainer";
import Web3 from "web3"
var web3;
var publicAddress
const Login = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (localStorage.getItem("authToken")) {

            history.push("/trade");
        }
    }, [history])

    const nonce = Math.floor(Math.random() * 10000)

    const handleSignMessage = async (publicAddress, nonce) => {
		try {
			const signature = await web3.eth.personal.sign(
				`Alpha-Baetrum Onboarding unique one-time nonce: ${nonce} by signimg this you are verifying your ownership of this wallet`,
				publicAddress,
				'' // MetaMask will ignore the password argument here
			)
			return { signature };
		} catch (error) {

			setError("User denied the transaction");
                setTimeout(() => {

                    setError("");

                }, 5000)
		}
	};

    const loginHandler = async (e) => {

        e.preventDefault()
       // Check if MetaMask is installed
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');
            web3 = new Web3(window.ethereum);

			window.ethereum.request({ method: 'eth_requestAccounts'})
			
		} else {
			console.log('Need to install MetaMask');
			// setErrorMessage('Please install MetaMask browser extension to interact');
		}

		const coinbase = await web3.eth.getCoinbase();
		if (!coinbase) {
			window.alert('Please activate MetaMask first.');
			return;
		}

		publicAddress = coinbase.toLowerCase();

        console.log(publicAddress);
        fetch(
			`/api/users?publicAddress=${publicAddress}`
		).then((response) => response.json()).then(async (users) => {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            try {

                console.log(publicAddress)
                const {data} = await axios.post("/api/users/nonce", {publicAddress, email, password }, config);
                console.log(data) 
                return data

            } catch(error) {

                console.log(error.response)
                setError(error.response.data.error);
                setTimeout(() => {

                    setError("");

                }, 5000)

                return error
            }
        }).then((res) => {


            // console.log(res.success != true) return
            if(res.success != true) return
            const nonce = res.nonce
            console.log(publicAddress)
        

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            // console.log(username);
    
            try {
    
                handleSignMessage(publicAddress, nonce).then(async function(signature) {
    
                    console.log(signature)
                    const {data} = await axios.post("/api/auth/login", {signature, nonce, publicAddress, email, password}, config);
                    console.log(data);
                    setLoading(true);
                    localStorage.setItem("authToken", data.token);
                    console.log(loading);
                    setTimeout(() => {
    
                        history.push("/trade");
    
                    }, 1000)
                })
    
                
    
            } catch(error) {
    
                console.log(error.response)
                setError(error.response.data.error);
                setTimeout(() => {
    
                    setError("");
    
                }, 5000)
            }
        })
    }

    return (
       <StyledContainer>
           <FormWrapper>
               <form >
                <ReturnHomeButton to="/"><BsArrowReturnLeft style={{"paddingTop": "15px"}}/></ReturnHomeButton>
                    <LogoStyles image={Logo} width={150} height={150}/>
                    {loading ? <StyledTitle color={"white"} size={30} align={"center"}>Success!</StyledTitle> : <StyledTitle color={"white"} size={30} align={"center"}>Login To Start Trading</StyledTitle>}
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
                        <FieldDescriptor size={10} left={"center"} style={{color: "rgb(22,181,127)"}}><LoginLink to="/forgotpassword" style={{textDecoration:"none", "fontSize": "12px"}}>Forgot Password</LoginLink></FieldDescriptor>
                    </FieldWrapper>
                    <Wrapper space={50}/>
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