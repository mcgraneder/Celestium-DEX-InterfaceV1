import React, { useEffect } from "react";
import WelcomePage from "./WelcomePage/Welcome";
import { StyledContainer, LoginStyledContainer } from "./StyledContainer";
import Nav from "./Navbar/Nav";
import Login from "./LoginPage/Login";

const Home = ({ history }) => {

    useEffect(() => {

        if (localStorage.getItem("authToken")) {

            history.push("/trade");
        }
    }, [history])

    return(

        <div>
            <Nav/>
            <LoginStyledContainer>
                <WelcomePage></WelcomePage>
            </LoginStyledContainer>
        </div>
    )
}

export default Home;
