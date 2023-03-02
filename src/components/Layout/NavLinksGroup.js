import { LinksGroup, DenseNavLinks } from "./NavLinkGroupStyles"

const links = [

    {
        to: "/wallet",
        icon: "fas fa-wallet",
        label: "Wallet"
    },
    {
        to: "/wallet/wallet",
        icon: "fa fa-exchange",
        label: "wallet"
    },
    {
        to: "/wallet/ech",
        icon: "fa fa-history",
        label: "Transactions"
    },
    {
        to: "/wallet/token",
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