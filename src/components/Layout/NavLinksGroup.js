import styled from "styled-components";
import NavLink from "./NavbarLink";

export const LinksGroup = styled.div`

    
    display: flex;
    flex-direction: column;
    flex-grow: ${(props) => Number(!props.compact)};
    padding: 0 0 14px 0;
    overflow: hidden;
    overflow-y: auto;
    background-color: rgba(35,35,52, 0.3);
    transition: flex-grow 0.2s cubic-bezier(0.4, 0, 1, 1);
   
    // box-shadow: none;
    border: none;
    min-height: 36px;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: rgb(22,181,127);
        // border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
            
    }
        
}
`

export const DenseNavLinks = styled(NavLink)`

    
    && {

        box-shadow: none !important;
        min-height: 36px;
        margin-top: 20px;
        font-size: 17px;
        border-radius: ${(props) => props.compact ? "0px" : "5px"};
        i {
        
            font-size: 22px;
        }

    }
    
    
`

const links = [

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


const NavLinksGroup = (props) => {

    return (

        <LinksGroup {...props}>
            {links.map(l => <DenseNavLinks compact={props.compact} key={l.to} to={l.to} iconName={l.icon} label={l.label}></DenseNavLinks>)}
        </LinksGroup>
    )
}

export default NavLinksGroup