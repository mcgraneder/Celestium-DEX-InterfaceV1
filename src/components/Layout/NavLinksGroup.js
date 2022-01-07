import { LinksGroup, DenseNavLinks } from "./NavLinkGroupStyles"

const links = [

    {
        to: "/trade",
        icon: "fas fa-wallet",
        label: "Wallet"
    },
    {
        to: "/trade/wallet",
        icon: "fa fa-exchange",
        label: "Trade"
    },
    {
        to: "/trade/ech",
        icon: "fa fa-history",
        label: "Transactions"
    },
    {
        to: "/trade/token",
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