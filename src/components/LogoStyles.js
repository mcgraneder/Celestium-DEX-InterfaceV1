import styled from "styled-components";

export const LogoStylesWrapper = styled.div`

    position: absolute;
    top: 4%;
    left: 0;
    margin-top: 50px;
    background-color: transparent;
    width: 100%;
    // display: flex;
    padding-top: 100px;
    justify-content: flex-start;
    z-index: -2;
`
export const LogoStyles = styled.div`

    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-color: transparent;
    background-position: center;
    margin: auto;
    // margin-bottom: 100px;
`