import { useEffect } from 'react';
import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector'

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 43114],
})


export default function useWeb3() {

	const connectWalletHandler = async () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');
            const web3 = new Web3(window.ethereum);

			window.ethereum.request({ method: 'eth_requestAccounts'})
			
		} else {
			console.log('Need to install MetaMask');
			// setErrorMessage('Please install MetaMask browser extension to interact');
		}
        
	}

    useEffect(() => {

        connectWalletHandler()
    }, [connectWalletHandler])
}
