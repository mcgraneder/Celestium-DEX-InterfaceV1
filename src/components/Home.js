import React, { useState, useEffect } from "react";
import WelcomePage from "./WelcomePage/Welcome";
import { StyledContainer, LoginStyledContainer } from "./StyledContainer";
import Nav from "./Navbar/Nav";
import Login from "./LoginPage/Login";
import useAuth from "../hooks/useAuth";
import Pl2 from "./pageLoadSpinner/Pl2";
import MetamaskPopup from "./MetaMaskPopup/MetaMaskPopup";

const Home = ({ history }) => {

    const { connectOnClick, active, account } = useAuth()
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
            <Nav/>
            {/* {loading && <Pl2></Pl2>} */}
            {active ? (loading ? <Pl2></Pl2> : <LoginStyledContainer>
                <WelcomePage></WelcomePage>
            </LoginStyledContainer>) : (<MetamaskPopup></MetamaskPopup>)}
        </div>
    )
}

export default Home;
