import Web3 from 'web3';
import Fortmatic from 'fortmatic';
import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { TorusConnector } from '@web3-react/torus-connector'
import { local } from 'web3modal';
import { TorusInpageProvider } from '@toruslabs/torus-embed';

export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 1337, 43114],
  })
  
  export const fortmatic = new FortmaticConnector({ 
      apiKey: "pk_test_C102027C0649EF66", 
      chainId: 4
  })
  
  export const portis = new PortisConnector({ dAppId: 
      "10c2a4ba-93fc-46d3-8c27-9b9019bea48f",
      networks: [1, 100] 
  })
  
  export const torus = new TorusConnector({ chainId: 1 })
  
  export const walletconnect = new WalletConnectConnector({
      rpc: { 1: "https://mainnet.infura.io/v3/ba5ee6592e68419cab422190121eca4c" },
      bridge: 'https://bridge.walletconnect.org',
      qrcode: true
  })
  
  export const walletconnect1 = new WalletConnectConnector({
      rpc: { 1: "https://mainnet.infura.io/v3/ba5ee6592e68419cab422190121eca4c" },
      bridge: 'https://bridge.walletconnect.org',
      qrcode: false
  })