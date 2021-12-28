import styled from "styled-components";
import { NavLinksGroup as Link } from "react-router-dom";

export const LinksGroup = styled.div`

    .group {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 24px 0 14px 0;
        overflow: hidden;
        overflow-y: auto;
        background-color: rgba(35,35,52, 0.1);
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
`
const NavLinksGroup = () => {

    return (

        <LinksGroup>

        </LinksGroup>
    )
}

export default NavLinksGroup