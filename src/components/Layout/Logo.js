import styled from "styled-components";
import { Link } from "react-router-dom";
import metamaskLogo from "../../assets/logo_transparent_background1.png"
const StyledLink = styled(Link)`

    font-size: 24px;
    font-weight: 300;
    min-height: 60px;
    color: White;
    display: flex;
    align-items: center;
    padding-left: 10px;
    // justify-content: center;
    // padding: 0 20px 0 20px;
    // border-bottom: 2px solid rgb(35,35,52);
    text-decoration: none;
    overflow: hidden;
    whitespace: nowarp;
    


    &:hover {
        color: rgb(22,181,127);
    }

    span {
        font-size: 500;
        padding-left: 10px;
        color: rgba(255, 255, 255, 0.9);
        opacity: ${(props) => Number(!props.compact)};
        transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
        overflow: hidden;
        white-space: nowrap;
        
    }
    
`;

const Logo = (props) => {

    return (
    
        <StyledLink {...props} to="/">
            <img src={metamaskLogo} width="45"></img>
             <span>Alpha-Baetrum</span>
            
        </StyledLink>
    )
}

export default Logo