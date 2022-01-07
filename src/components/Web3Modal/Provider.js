import React from "react";
import styled from "styled-components";


export const ConnectButton = styled.div`

    height: 60px;
    width: 100%;
    background: rgb(35,35,52);
    border-radius: 10px;
    margin-top: 20px;
    border: 1px solid rgb(45,45,62);
   
    &:hover {

        border: 1px solid rgb(77, 102, 235);
    }
`

export const TitleContainer = styled.div`

    height: 40px;
    margin-right: ${(props) => props.margin};
`;

export const Logo = styled.div`

   width: ${(props) => props.width}px;
   height: ${(props) => props.width}px;
   float: right;
   line-height: 75px;
`;

export const ModalTitle = styled.div`

    font-size: 20px;
    font-weight: bold;
    align-items: left;
    color: white;
    display: flex;
    padding-left: 20px;
    line-height: 60px;
    // float-left;
    left: 0%;
    
`;

const providers = [

    {
        to: "/trade/wallet",
        icon: "fas fa-wallet",
        label: "Wallet"
    },
    {
        to: "/trade/trade",
        icon: "fa fa-exchange",
        label: "Trade"
    },
    {
        to: "/trade/history",
        icon: "fa fa-history",
        label: "Transactions"
    },
    {
        to: "/trade/tokeninfo",
        icon: "fas fa-coins",
        label: "Token Info"
    },
]


const Provider = ({margin, width1, logo, width2, title, connect}) => {

    return (

        <ConnectButton onClick={connect}>
            <TitleContainer margin={margin}>
                <Logo width={width1}><img src={logo} width={width2} /></Logo>
                <ModalTitle>{title}</ModalTitle>
            </TitleContainer>
        </ConnectButton>
    )
}

export default Provider;