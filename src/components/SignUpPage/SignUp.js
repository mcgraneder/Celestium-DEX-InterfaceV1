import React, { useState, useEffect } from "react";
import { FormWrapper, FieldWrapper, LoginLink, LoginLinkWrapper, FieldDescriptor, ReturnHomeButton } from "./SignUpStyles";
import { StyledTitle, } from "../StyledTitle";
import Logo from "../../assets/logo.png";
import { LogoStyles } from "../LogoStyles";
import { Button, ButtonWrapper, ButtonStatic } from "../ButtomStyles";
import { Wrapper } from "../StyledTitle";
import { FiMail, FiLock, FiUser} from "react-icons/fi";
import {BsArrowReturnLeft } from "react-icons/bs"
import { StyledLabel } from "./SignUpStyles";
import { StyledTextInput } from "./SignUpStyles";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Icon } from "./SignUpStyles";
import axios from "axios";
import { ErrorMsg } from "./SignUpStyles";
import Loader from "react-loader-spinner";
import { StyledContainer } from "../StyledContainer";
import Web3 from 'web3';
import Fortmatic from 'fortmatic';
var web3;
var publicAddress 
const SignUp = ({ history }) => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("Login To Start Trading")
    const [colour, setColour] = useState("rgb(22,181,127)")

    // const fm = new Fortmatic('pk_test_C102027C0649EF66');
    // window.web3 = new Web3(fm.getProvider());

        // if (window.ethereum) {
        //     // Use MetaMask provider
        //     window.web3 = new Web3(window.ethereum);
        //   } else {
        //     // Use Fortmatic provider
        //     window.web3 = new Web3(fm.getProvider());
        //   }
        // //   web3.currentProvider.enable();

        // web3 = window.web3
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
			);
            

			return { signature };
		} catch (error) {

            setLoading(false);
            setText("Login To Start Trading")
			 setColour("red")
            setTimeout(() => {

                setError("");
                setColour("rgb(22,181,127)")

            }, 5000)
    
		}
	};


    const registerHandler = async (e) => {

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

		
		// const coinbase = await web3.eth.getAccounts();
        // console.log(coinbase)
		// if (!coinbase) {
		// 	window.alert('Please activate MetaMask first.');
		// 	return;
		// }

		

        console.log(publicAddress);
        await web3.eth.getCoinbase().then(async (users) => {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            try {

                console.log(publicAddress)
                const {data} = await axios.post("/api/users/publicAddress", {publicAddress, username, email, password}, config);
                setLoading(true);
                setText("Please Verify Your Wallet!")
                console.log(data)  

            } catch(error) {

                setLoading(false);
                setText("Login To Start Trading")
                console.log(error.response)
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
            console.log(username);
    
            try {
    
                handleSignMessage(publicAddress, nonce).then(async function(signature) {
    
                    console.log(signature)
                    const {data} = await axios.post("/api/auth/register", {signature, nonce, publicAddress, username, email, password}, config);
                    console.log(data);
                    setText("Success!")
                    localStorage.setItem("authToken", data.token);
                    localStorage.removeItem("registered")
                    console.log(loading);
                    localStorage.setItem("email", email)
                    setTimeout(() => {
    
                        history.push("/trade");
    
                    }, 1000)
                })
    
                
    
            } catch(error) {
    
                setLoading(false);
                setText("Login To Start Trading")
                console.log(error.response)
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
           <FormWrapper style={{position: "relative"}}>
                <ReturnHomeButton to="/"><BsArrowReturnLeft style={{"paddingTop": "15px"}}/></ReturnHomeButton>
                <LogoStyles image={Logo} width={150} height={150}/>
                <StyledTitle color={"white"} size={30} align={"center"}>{text}</StyledTitle>
                <Wrapper space={5}/>
                {error && <ErrorMsg>{error}</ErrorMsg>}   
                <Wrapper space={40}/>
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
                 <Wrapper space={50}/>
                 <ButtonWrapper>
                        {loading ? <Loader type="ThreeDots" color={`rgb(22,181,127)`} height={50} width={100}/> : <ButtonStatic type="submit" onClick={registerHandler} colour={`rgb(22,181,127)`} bordercolour={`rgb(22,181,127)`}>Sign Up</ButtonStatic>}
                    </ButtonWrapper>
                 <Wrapper space={12}/>
                 <LoginLinkWrapper>Already Registered? <LoginLink to="/login" style={{textDecoration:"none"}}> Login</LoginLink></LoginLinkWrapper>
           </FormWrapper>
       </StyledContainer>
    )
}

export default SignUp;