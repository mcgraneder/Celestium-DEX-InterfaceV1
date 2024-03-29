import React, { useState, useEffect } from "react";
import WelcomePage from "./WelcomePage/Welcome";
import { LoginStyledContainer } from "./StyledContainer";
import Nav from "./Navbar/Nav";
import useAuth from "../hooks/useAuth";
import MetamaskPopup from "./MetaMaskPopup/MetaMaskPopup";
import Web3Modal from "./Web3Modal/Web3Modal";



const Home = ({ history }) => {

    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);
    const { active, onPageLoading, account } = useAuth()
    const [loading, setLoading] = useState(false)

    
   
    
    useEffect(() => {

        if (localStorage.getItem("authToken")) {

            history.push("/wallet");
        }
        
    }, [history])


     useEffect(() => {

        if (active) {

            if(localStorage.getItem("account2") == null || localStorage.getItem("account2") == undefined) {

                localStorage.setItem("account2", account)
            }
            setLoading(true)
            setTimeout(function(){
                setLoading(false)
            }, 800);//wait 2 seconds
            
        }
    }, [history, active])


    return(

        <div>
            <Web3Modal visible={show1} close={toggle1}></Web3Modal>
            <Nav close={toggle1}/>
            {onPageLoading ? <div></div> : (active ? 
            <LoginStyledContainer>
                <WelcomePage></WelcomePage>
            </LoginStyledContainer> 
            : <MetamaskPopup></MetamaskPopup>)}
        </div>
    )
}

export default Home;