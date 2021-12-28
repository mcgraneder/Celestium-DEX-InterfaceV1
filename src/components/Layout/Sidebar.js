import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Logo from "./Logo";
import { breakpoints as bp } from "../GlobalStyle";
import { FiMenu, FiSettings } from "react-icons/fi";
import { BiWallet } from "react-icons/bi"
import { AiOutlineStock, AiOutlineHistory } from "react-icons/ai"
import { GrTransaction, GrHistory } from "react-icons/gr"
import { BsCashCoin } from "react-icons/bs"
import { MdLogout} from "react-icons/md"
import NavLink from "./NavbarLink";
import { Wrapper } from "../StyledTitle";

export const StyledSidebar = styled.nav`

    background-color: rgb(26,26,39);
    height: 100vh;
    width: ${(props) => props.compact ? "70px" : "260px"};
    position: sticky;
    top: 0;
    // overflow: hidden;
    z-index: 1000;
    display: flex;
    border-right: 2px solid rgb(35,35,52);
    flex-direction: column;
    transition: width 0.3s cubic-bezier(0.4, 0, 1, 1);
    .group {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 24px 0 14px 0;
        margin-right: 2px;
        overflow: hidden;
        overflow-y: auto;
        // background-color: rgba(35,35,52, 0.1);
        box-shadow: none;
        border: none;
        min-height: 36px;
        

        ::-webkit-scrollbar {
            width: 4px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.6);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #555;
            
        }
        
    }
    &::before {
        // content: "";
        background-color: rgba(26,26,39, 0.2);
        position: absolute:
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    @media(max-width: ${bp.desktop}) {

        position: fixed;
        transform: translate3d(${(props) => props.visible ? 0 : `-260px, 0, 0`});
        transition: transform 0.4s  ${(props) => props.visible ? `cubic-bezier(0, 0, 0.2, 1)` : `cubic-bezier(0.4, 0, 1, 1) !important`};

    };
    
    // transition: 0.2s cubic-bezier(0.4, 0, 1, 1) !important;

`;

// export const DenseNavLinks = styled()

export const Backdrop = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.2);
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1) !important;
    ${(props) => props.visible && css`

        opacity: 1;
        pointer-events: all;
    `}

    @media(min-width: ${bp.desktop}) {

        opacity: 0;
        pointer-events: none;
        opacityL 0.3s 
    }
`;

const Sidebar = (props) => {

    const [compact, setCompact] = useState(0);

    return(

        <>
            <Backdrop visible={props.visible} onClick={props.close}></Backdrop>
            <StyledSidebar compact={compact} {...props}>
                
                <Logo compact={compact}/>
                {/* <Wrapper space={50}></Wrapper> */}
                <div className="group">
                    <NavLink to="/wallet">
                        <BiWallet style={{fontSize: '25px'}}></BiWallet>
                        <span className="label">Wallet</span>
                    </NavLink>
                    <NavLink to="/trade/wallet">
                        {/* <AiOutlineStock style={{fontSize: '25px'}}></AiOutlineStock> */}
                        <i className="fas fa-box"></i>
                        <span className="label">Trade</span>
                    </NavLink>
                    <NavLink to="/Transactions">
                        {/* <AiOutlineHistory style={{fontSize: '25px'}}></AiOutlineHistory> */}
                        <i className="fas fa-box"/>
                        <span className="label">Transactions</span>
                    </NavLink>
                    <NavLink to="/Token Info">
                        <BsCashCoin style={{fontSize: '25px'}}></BsCashCoin>
                        <span className="label">Token Info</span>
                    </NavLink>
                </div>
                <NavLink compact={compact}to="/settings">
                    <FiSettings style={{fontSize: '25px'}}></FiSettings>
                    <span className="label">settings</span>
                </NavLink>
                <NavLink compact={compact} to="/">
                    <MdLogout style={{fontSize: '25px'}}></MdLogout>
                    <span className="label">Logout</span>
                </NavLink>
                <button className="nav-toggle" onClick={() => setCompact(Number(!compact))}>
                    <FiMenu></FiMenu>
                </button>
                    
            </StyledSidebar>
        </>
        


    )
}

export default Sidebar;