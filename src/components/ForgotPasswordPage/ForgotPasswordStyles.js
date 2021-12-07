import styled from "styled-components";
import { colours } from "../StyledContainer";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";


export const StyledTextInput = styled.input`

    width: 280px;
    image: ${ <FontAwesomeIcon icon={faAirbnb} />} 
    height: 10px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    outline: 0;
    colour: ${colours.light2};
    border: 3px solid rgb(22,181,127);
    border-radius: 5px;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s
    background-color: ${colours.light2}

    ${(props) => props.invalid && `background-color: ${colours.red}, color: ${colours.primary}`};

    &:focus {
        background-color: ${colours.dark2};
        color: ${colours.primary};
    }
`

export const StyledLabel = styled.p`

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    padding: ${(props) => props.padding}px;
    margin: ${(props) => props.margin}px;

`

export const FormWrapper = styled.div`

    width: 420px;
    height: 570px;
    background: rgb(35,35,52);
    text-align: right;
    padding: 10px 45px;
    // border: 0.5px solid  rgb(26,26,39);
    border-radius: 10px;
`

export const FormButton = styled.button`

    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colours.theme};
    transition: ease-in-out 0.3s

    &:hover {

        background-color: ${colours.primary};
        color: ${colours.theme};
        cursor: pointer;
    }
`

export const Wrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 320px;
    padding: 20px;
    margin: 0 auto;
    input {
        color: black;
        width: 100%;
        height: 30px;
        border 1px solid var(--darkGrey);
        border-radius 20px;
        margin: 10px 0;
        padding: 10px
    }
    .error {
        color: red;
    }
    label {
        color: black;
    }
`;

export const FieldWrapper = styled.div`

    padding: 30px 30px;
    background: rgb(26,26,39);
    border-radius: 15px;
`

export const Icon = styled.p`

    color: ${colours.dark1};
    position: absolute;
    font-size: 21px;
    // width: 5px;
    top: 20px;
    // left: 20px;
    ${(props) => props.right && `right: 25px;`};
    ${(props) => props.left && `left: 20px;`};

`

export const LoginLink = styled(Link)`

    font-size: 15px;
    color: rgb(22,181,127);
`

export const LoginLinkWrapper = styled.p`

    text-align: center;
    font-size: 15px;
`

export const FieldDescriptor = styled.p`

    padding-left: 10px;
    text-align: ${(props) => props.left};
    font-size: ${(props) => props.size}px;
`

export const ReturnHomeButton = styled(Link)`

    text-align: left;
    position: absolute;
    display: block;
    font-size: 20px;
    color: rgb(22,181,127);
`