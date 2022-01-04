import React, { useState, useEffect } from "react";
import WelcomePage from "./WelcomePage/Welcome";
import { StyledContainer, LoginStyledContainer } from "./StyledContainer";
import Nav from "./Navbar/Nav";
import Login from "./LoginPage/Login";
import useAuth from "../hooks/useAuth";
import Pl2 from "./pageLoadSpinner/Pl2";
import MetamaskPopup from "./MetaMaskPopup/MetaMaskPopup";
import Web3Modal from "./Web3Modal/Web3Modal";


const Home = ({ history }) => {


    const [show, setShow] = useState(0);
    const [show1, setShow1] = useState(false);
    const toggle = () => setShow(Number(!show));
    const toggle1 = () => setShow1(!show1);
    const { connectOnClick, active, account, web3 } = useAuth()
    console.log(web3)
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        if (localStorage.getItem("authToken")) {

            history.push("/trade");
        }
    }, [history])

    

     useEffect(() => {

        if (localStorage.getItem("authToken")) {

            history.push("/trade");
        }

        if (active) {

            console.log(active)
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
            {/* {loading && <Pl2></Pl2>} */}
            {active ? (loading ? <Pl2></Pl2> : <LoginStyledContainer>
                <WelcomePage></WelcomePage>
            </LoginStyledContainer>) : (<MetamaskPopup></MetamaskPopup>)}
        </div>
    )
}

export default Home;
