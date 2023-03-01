import React from "react";
import { FiMenu } from "react-icons/fi";
import { breakpoints as bp } from "../GlobalStyle";
import ConnectWalletButton from "../Buttons/ConnectWalletButton";
import { Grid } from "./NavbarStyles";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";
import { ButtonText } from "../Buttons/ConnectWalletButtonStyles";
import { useHistory } from "react-router-dom";

export const StyledDiv = styled.div`
    display: flex;
    gap: 15px;
    flex: row;
    align-items: center;
`

export const ConnectButton = styled.div`

    // background: rgb(89,115,254);
    border: none;
    border-radius: 15px;
    width: ${(props) => props.height}px;
    height: 30px;
    background: rgb(77, 102, 235);
    padding: 5px 10px;
    color: #fff;
    font-size: ${(props) => props.fontsize}px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    vertical-align: middle;
    text-align: center;
    display: flex;
    flex: row;
    align-items: center;
  
`
const Navbar = ({toggle}) => {

    const {connectOn, disconnect} = useAuth()
    const history = useHistory()
        const logoutHandler = () => {
            console.log("hey")

        localStorage.removeItem("authToken");
        localStorage.removeItem("email")
        history.push("/login");
        disconnect()
    }
    return (

        <Grid>
            <div>
                <span onClick={toggle}><FiMenu className="icon" style={{fontSize: '25px'}}/></span>
            </div>
            <div className="mid"></div>
            <StyledDiv>
                <ConnectWalletButton left={"85.5%"} top={"1.5%"} height="150" fontsize="15" onclick={connectOn} colour="rgb(89, 115, 254)" width="35"></ConnectWalletButton>
                <ConnectButton left={"85.5%"} top={"1.5%"} height="150" fontsize="15" onClick={logoutHandler} colour="rgb(89, 115, 254)" width="35">
                   Logout
                </ConnectButton> 
            </StyledDiv>
        </Grid>
    )
}

export default Navbar;