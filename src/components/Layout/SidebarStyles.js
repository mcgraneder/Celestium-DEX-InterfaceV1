
import styled, { css } from "styled-components";
import { breakpoints as bp } from "../GlobalStyle";

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

    @media(min-width: ${bp.desktop}) {

        opacity: 0;
        pointer-events: none;
    
    }
`;

