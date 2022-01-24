import styled from "styled-components";
import { Link } from "react-router-dom";
import { colours } from "./StyledContainer";

export const Button = styled(Link)`

    display: inline-block;
    position: relative;
    overflow: hidden;
    padding: 15px;
    font-weight: bold;
    width: 200px;
    background: transparent;
    font-size: 16px;
    border: 2px solid ${(props) => props.bordercolour};
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
        border: 1.5px solid transparent;
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
        transition: all .3s;
        border-radius: 25px;
        // border: 1.5px solid transparent;
        z-index: -1;
    }
    &:hover {
        border: 1.5px solid transparent;
        color: #fff;
        &:before {
        width: 100%;
        }
  }
`

export const ButtonStatic = styled.button`

    display: inline-block;
    position: relative;
    overflow: hidden;
    padding: 15px;
    width: 250px;
    background: transparent;
    font-size: 16px;
    border: 2px solid ${(props) => props.bordercolour};
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
        border: 1.5px solid transparent;
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
        transition: all .3s;
        border-radius: 25px;
        // border: 1.5px solid transparent;
        z-index: -1;
    }
    &:hover {
        border: 1.5px solid transparent;
        color: #fff;
        &:before {
        width: 100%;
        }
    

  }
`

export const ButtonLoading = styled.div`

    display: inline-block;
    position: relative;
    overflow: hidden;
    padding: 15px;
    width: 250px;
    background: transparent;
    font-size: 16px;
    border: 2px solid ${(props) => props.bordercolour};
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
        border: 1.5px solid transparent;
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
        transition: all .3s;
        border-radius: 25px;
        // border: 1.5px solid transparent;
        z-index: -1;
    }
    &:hover {
        border: 1.5px solid transparent;
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
    // margin-top: 10px;
    // margin-bottom: 50px;
    background: transparent;
`