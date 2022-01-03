import { useEffect, useCallback } from 'react';
import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector'

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 43114],
})


export default function useWeb3() {

	// var web3;
	const connectWalletHandler = useCallback(() => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');
            window.web3 = new Web3(window.ethereum)

			window.ethereum.request({ method: 'eth_requestAccounts'})

			
			
		} else {
			console.log('Need to install MetaMask');
			// setErrorMessage('Please install MetaMask browser extension to interact');
		}

		const web3 = window.web3
		return web3
        
	}, [])

	const web3 = connectWalletHandler()
	

    // useEffect(() => {

    //     connectWalletHandler()
		

		
    // }, [connectWalletHandler])

	

	return web3;
}