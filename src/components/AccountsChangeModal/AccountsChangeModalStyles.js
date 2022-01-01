import styled, { css } from "styled-components";

export const FormWrapper = styled.div`

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 450px;
    opacity: 0;
    background-color: rgb(36,36,49);
    text-align: right;
    padding: 30px 20px;
    border: 1.5px solid  rgb(31,31,44);
    border-radius: 10px;
    z-index: 10000;
    ${(props) => props.visible && css`

    opacity: 1;
    pointer-events: all;
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1) !important;
`}
    
`
