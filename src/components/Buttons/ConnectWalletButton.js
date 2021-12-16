import React from "react"
import { ConnectButton, Logo, ButtonText, ButtonText1 } from "./ConnectWalletButtonStyles"
import useAuth from "../../hooks/useAuth"
import logo1 from "../../assets/metamask.png"
const ConnectWalletButton = () => {

    const { connectOnClick, active, account } = useAuth()

    return (

        <div>
            {active ? <ConnectButton onClick={connectOnClick}><Logo><img src={logo1} width="40" /></Logo><ButtonText >{account.substring(0, 6)}...{account.substring(account.length - 4)}</ButtonText></ConnectButton> : <ConnectButton onClick={connectOnClick}><ButtonText1>Connect Wallet</ButtonText1></ConnectButton>}
        </div>
    )
}

export default ConnectWalletButton;