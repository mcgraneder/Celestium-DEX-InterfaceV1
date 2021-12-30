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
import NavLinksGroup from "./NavLinksGroup";
import { Wrapper } from "../StyledTitle";
import SidebarButton from "./SidebarButton";

export const StyledSidebar = styled.nav`

    background-color: rgb(26,26,39);
    height: 100vh;
    width: ${(props) => props.compact ? "70px" : "260px"};
    position: sticky;
    top: 0;
    overflow: hidden;
    z-index: 1000;
    display: flex;
    border-right: 2px solid rgb(35,35,52);
    flex-direction: column;
    transition: width 0.3s cubic-bezier(0.4, 0, 1, 1), transform 0.3s cubic-bezier(0.4, 0, 1, 1) !important;
    
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
    background-color: rgba(0, 0, 0, 0.4);
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1) !important;
    ${(props) => props.visible && css`

        opacity: 1;
        pointer-events: all;
        pointer: cursor;
    `}

    // @media(min-width: ${bp.desktop}) {

    //     opacity: 0;
    //     pointer-events: none;
    //     opacityL 0.3s 
    // }
`;


const Sidebar = (props) => {

    const [compact, setCompact] = useState(0);

    return(

        <>
            <Backdrop visible={props.visible} onClick={props.close}></Backdrop>
            <StyledSidebar compact={compact} {...props}>
                <Logo compact={compact}/>
                <NavLink style={{borderBottom: "1px solid rgba(255, 255, 255, 0.1)"}}></NavLink>
                <NavLinksGroup compact={compact}></NavLinksGroup>
                <NavLink  compact={compact} to="/wallet" iconName="fas fa-user" label="Profile"></NavLink>
                <NavLink  compact={compact} to="/wallet" iconName="fas fa-cog" label="Settings"></NavLink>
                <NavLink onClick={props.logout} compact={compact} to="/login" iconName="fas fa-sign-out" label="Logout"></NavLink>
                <SidebarButton compact={compact} setCompact={setCompact}></SidebarButton>
            </StyledSidebar>
        </>
        


    )
}

export default Sidebar;