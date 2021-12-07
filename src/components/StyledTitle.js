import styled from "styled-components";
import { colours } from "./StyledContainer";

export const StyledTitle = styled.div`

    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colours.primary};
    padding: 5px;
    margin-bottom:  ${(props) => props.margin}px;
    font-weight: bold;
    background-color: transparent;
`
export const StyledSubTitle = styled.div`

    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colours.primary};
    padding: 5px;
    margin-bottom: 100px;
    background-color: transparent;

`
export const Wrapper = styled.div`

    height ${(props) => props.space}px;
`;