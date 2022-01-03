import Web3 from 'web3';
import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { TorusConnector } from '@web3-react/torus-connector'

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 43114],
})

export const walletconnect = new WalletConnectConnector({
    rpc: { 1: "https://mainnet.infura.io/v3/ba5ee6592e68419cab422190121eca4c" },
    qrcode: true
})

export const fortmaticc = new FortmaticConnector({ 
    apiKey: process.env.FORTMATIC_API_KEY, 
    chainId: 4
})

export const portiss = new PortisConnector({ dAppId: 
    process.env.PORTIS_DAPP_ID,
    networks: [1, 100] 
})

export const toruss = new TorusConnector({ chainId: 1 })
