import React from "react";
import { FiMenu } from "react-icons/fi";
import { breakpoints as bp } from "../GlobalStyle";
import ConnectWalletButton from "../Buttons/ConnectWalletButton";
import { Grid } from "./NavbarStyles";
import useAuth from "../../hooks/useAuth";

const Navbar = ({toggle}) => {

    const {connectOn} = useAuth()
    return (

        <Grid>
            <div>
                <span onClick={toggle}><FiMenu className="icon" style={{fontSize: '25px'}}/></span>
            </div>
            <div className="mid"></div>
            <div>
                <ConnectWalletButton left={"85.5%"} top={"1.5%"} height="150" fontsize="15" onclick={connectOn} colour="rgb(89, 115, 254)" width="35"></ConnectWalletButton>
            </div>
        </Grid>
    )
}

export default Navbar;