import React, { useEffect } from "react";
import WelcomePage from "./WelcomePage/Welcome";
import { StyledContainer } from "./StyledContainer";
import Nav from "./Navbar/Nav";

const Home = ({ history }) => {

    useEffect(() => {

        if (localStorage.getItem("authToken")) {

            history.push("/trade");
        }
    }, [history])

    return(

        <div>
            <Nav/>
            <StyledContainer>
                <WelcomePage></WelcomePage>
            </StyledContainer>
        </div>
    )
}

export default Home;
