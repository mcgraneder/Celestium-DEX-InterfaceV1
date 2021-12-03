import styled from "styled-components";

export const LogoStylesWrapper = styled.div`

    position: absolute;
    top: 4%;
    left: 0;
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: flex-start;
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