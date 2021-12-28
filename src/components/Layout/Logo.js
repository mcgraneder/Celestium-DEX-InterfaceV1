import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`

    font-size: 24px;
    font-weight: 300;
    min-height: 60px;
    color: White;
    display: flex;
    align-items: center;
    padding: 0 20px 0 20px;
    border-bottom: 2px solid rgb(35,35,52);
    text-decoration: none;


    &:hover {
        color: rgb(22,181,127);
    }

    span {
        font-size: 500;
        color: rgba(255, 255, 255, 0.9);
        opacity: ${(props) => Number(!props.compact)};
        transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
    }
    
`;

const Logo = (props) => {

    return (
    
        <StyledLink {...props} to="/">
            A<span>lpha-Baetrum</span>
        </StyledLink>
    )
}

export default Logo