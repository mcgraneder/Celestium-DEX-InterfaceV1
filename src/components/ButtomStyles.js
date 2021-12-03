import styled from "styled-components";
import { Link } from "react-router-dom";
import { colours } from "./StyledContainer";

export const Button = styled(Link)`

    padding: 15px;
    width: 200px;
    background: transparent;
    font-size: 16px;
    border: 1.5px solid ${(props) => props.bordercolour};
    border-radius: 25px;
    color: ${colours.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;

    &:hover {

        background-color: ${colours.primary};
        color: black;
        cursor: pointer;
        background: ${(props) => props.colour};
        font-weight: bold;
        border: 1.5px solid ${colours.primary};
    }
`

export const ButtonWrapper = styled.div`

    
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
    // margin-bottom: 50px;
    background: transparent;
`