import styled, { css } from "styled-components";

export const FormWrapper = styled.div`

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 232px;
    opacity: 0;
    background-color: rgb(35,35,52);
    text-align: right;
    padding: 30px 30px;
    border: 1.5px solid  rgb(31,31,44);
    border-radius: 10px;
    z-index: -10000;
    ${(props) => props.visible && css`
        z-index: 10000;
        opacity: 1;
        pointer-events: all;
        transition: transform 1s cubic-bezier(0.4, 0, 1, 1) !important;
    `}
`


export const Backdrop = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    pointer-events: none;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.2);
    transition: opacity 0.05s ease-in-out !important;
    z-index: 10000;
    ${(props) => props.visible && css`

        opacity: 1;
        pointer-events: all;
        transition: opacity 0.05s ease-in-out !important;
    `}

   
`;

export const DisclaimerContainer = styled.div`

    // width: 300px;
    // height: 100%;
    background: rgb(26,26,39);
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 12px;
    padding-bottom: 1px;
    margin-bottom: 20px;
    flex-direction: space-between;
`;

export const ModalTextWrapper = styled.div`

    
    justify-content: left !important;
    word-wrap: break-word !important;
    word-wrap: break-word;
    align-items: left !important;
    overflow: hidden;
    margin-bottom: 15px;

`;
export const ModalText = styled.p`

    
    font-size: 16px;
    // line-height: 30px;
    // font-weight: bold;
    color: rgb(141,141,149);
    padding: 8px 12px;
    justify-content: left !important;
    word-wrap: break-word;
    align-items: left  !important;
    text-align: left;
    font-weight: bold;
    
   
    
    
`;
