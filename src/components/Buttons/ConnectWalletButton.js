import React from "react"
import { ConnectButton, Logo, ButtonText, ButtonText1 } from "./ConnectWalletButtonStyles"
import useAuth from "../../hooks/useAuth"
import logo1 from "../../assets/metamask.png"
const ConnectWalletButton = ({close, color, width, fontsize, height}) => {

    const { active, account } = useAuth()

    
    return (

        <div>
            {active ? <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><Logo width={width}><img src={logo1} width={width} /></Logo><ButtonText >{account.substring(0, 6)}...{account.substring(account.length - 4)}</ButtonText></ConnectButton> : <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><ButtonText1>Connect Wallet</ButtonText1></ConnectButton>}
        </div>
    )
}

export default ConnectWalletButton;