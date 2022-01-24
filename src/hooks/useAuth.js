import { useState, useEffect, useRef } from 'react';
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

export default function useAuth() {

    const [loading, setLoading] = useState(false);
    const [onPageLoading, setOnPageLoading] = useState(false)
    const [acc, setAcc] = useState("")
    const web32 = useRef(null)
    let web3

    var { active, account, library, connector, activate, deactivate } = useWeb3React()
    var loggedInAccount = localStorage.getItem("account")
    var provider = localStorage.getItem("provider")
  
    async function connectOnLoad() {

        if ( localStorage.getItem("provider") == "fortmatic") provider = fortmatic
        if ( localStorage.getItem("provider") == "injected") provider = injected
        if ( localStorage.getItem("provider") == "walletconnect") {

            provider = walletconnect
            return;  
        }

        if ( localStorage.getItem("provider") == "portis") provider = portis
        if ( localStorage.getItem("provider") == "torus") provider = torus 

        setOnPageLoading(true)

         try {
           
            await activate(provider, undefined, true);
            await deactivate()
            await activate(provider, undefined, true);
           
          
          } catch (err) {

            console.error(err)
            deactivate()
            // localStorage.removeItem("provider");

            setOnPageLoading(false)
          }
          setOnPageLoading(false)
       
    }

    useEffect(() => {
 
        if (loggedInAccount != null) {

             connectOnLoad()
        }

    }, [])


    async function connectOn(provider1) {
        
       
        if(active) {

            alert("You must dissconnect first")
            return
        }

        console.log(provider1)
        if (provider1 === "fortmatic") provider = fortmatic
        if (provider1 === "injected") provider = injected
        if (provider1 === "walletconnect") {

            provider = walletconnect
            
        }
        if (provider1 === "portis") provider = portis
        if (provider1 === "torus") provider = torus 

       
        setLoading(true)

           
            try {
                await activate(provider)
                loggedInAccount = localStorage.setItem("account", account);
                localStorage.setItem("provider", provider1);
               
                setTimeout(() => {

                    setLoading(false)
                }, 800)
                
            } catch (err) {

                console.log(err)
                deactivate()
                localStorage.removeItem("provider");

                setLoading(false)
            }
    }


    async function disconnect() {
        try {

        deactivate()
        web3 = undefined;
        setTimeout(function() {
            alert("you are no longer connected")
        }, 250)
        setLoading(false)
        localStorage.removeItem("account");
        localStorage.removeItem("provider");

        } catch (err) {

            console.error(err)
        }
    }


  return { connectOnLoad, disconnect, connectOn, active, account, loading, library, onPageLoading}
}