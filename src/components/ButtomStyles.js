import styled from "styled-components";
import { Link } from "react-router-dom";
import { colours } from "./StyledContainer";

export const Button = styled(Link)`

    // padding: 15px;
    // width: 200px;
    // background: transparent;
    // font-size: 16px;
    // border: 1.5px solid ${(props) => props.bordercolour};
    // border-radius: 25px;
    // color: ${colours.primary};
    // text-decoration: none;
    // text-align: center;
    // transition: ease-in-out 0.3s;

    // &:hover {

    //     background-color: ${colours.primary};
    //     color: black;
    //     cursor: pointer;
    //     background: ${(props) => props.colour};
    //     font-weight: bold;
    //     border: 1.5px solid ${colours.primary};
    // }

    display: inline-block;
    position: relative;
    overflow: hidden;
    padding: 15px;
    font-weight: bold;
    width: 200px;
    background: transparent;
    font-size: 16px;
    border: 1.5px solid ${(props) => props.bordercolour};
    border-radius: 25px;
    color: ${colours.primary};
    text-decoration: none;
    text-align: center;
    z-index: 1;
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
    }
    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: ${(props) => props.colour};
        transition: all .4s;
        border-radius: 10rem;
        z-index: -1;
    }
    &:hover {
        color: #fff;
        &:before {
        width: 100%;
        }
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