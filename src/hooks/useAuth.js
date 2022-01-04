import { useState, useEffect } from 'react';
import Web3 from 'web3';
import Fortmatic from 'fortmatic';
import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { TorusConnector } from '@web3-react/torus-connector'
import { local } from 'web3modal';

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
    qrcode: true
})

export default function useAuth() {

    const [loading, setLoading] = useState(false);


    const [acc, setAcc] = useState("")
    var [web3, setWeb3] = useState("");
    var { active, account, library, connector, activate, deactivate } = useWeb3React()
    
    var accounts;
    var acount
    
    var loggedInAccount = localStorage.getItem("account")
    var provider = localStorage.getItem("provider")
    
    async function connectOnLoad() {

        if ( localStorage.getItem("provider") == "fortmatic") provider = fortmatic
        if ( localStorage.getItem("provider") == "injected") provider = injected
        if ( localStorage.getItem("provider") == "walletconnect") provider = walletconnect
        if ( localStorage.getItem("provider") == "portis") provider = portis
        if ( localStorage.getItem("provider") == "torus") provider = torus

        setLoading(true)

         try {

            await activate(provider, undefined, true);
            await deactivate()
            await activate(provider, undefined, true);
          
          } catch (err) {

            console.error(err)
            deactivate()
            setLoading(false)
          }
          setLoading(false)
       
    }

    useEffect(() => {
 
        if (loggedInAccount != null) {
            
             connectOnLoad()
        }

    }, [])


    async function connectOnClick() {
        
       
        if(active) {

            alert("You must dissconnect first")
            return
        }
        setLoading(true)

           
            try {
                await activate(injected)
                loggedInAccount = localStorage.setItem("account", account);
                provider = localStorage.setItem("provider", "injected");
                setTimeout(() => {

                    setLoading(false)
                }, 800)

            } catch (err) {

                console.log(err)
                deactivate()
                setLoading(false)
            }
    }

    async function connectOnClickFortmatic() {
        
        console.log(active)
        if(active) {

            alert("You must dissconnect first")
            return
        }

        setLoading(true)

           
            try {
                await activate(fortmatic)
                loggedInAccount = localStorage.setItem("account", account);
                provider = localStorage.setItem("provider", "fortmatic");
                setLoading(false)
        
            } catch (err) {

                console.log(err)
                deactivate()
                setLoading(false)
            }
            
    }

    async function connectOnClickTorus() {
        
        if(active) {

            alert("You must dissconnect first")
            return
        }

        setLoading(true)

            
            try {
                await activate(torus)
                loggedInAccount = localStorage.setItem("account", account);
                provider = localStorage.setItem("provider", "torus");
                setLoading(false)
        
            } catch (err) {

                console.log(err)
                deactivate()
                setLoading(false)
            }

    }

    async function connectOnClickPortis() {
        
        if(active) {

            alert("You must dissconnect first")
            return
        }

        setLoading(true)

           
            try {
                await activate(portis)
                loggedInAccount = localStorage.setItem("account", account);
                provider = localStorage.setItem("provider", "portis");
                setLoading(false)
        
            } catch (err) {

                console.log(err)
                deactivate()
                setLoading(false)
            }

            // console.log(localStorage.getItem("walletconnect"))

            
    }

    async function connectOnClickWalletConnect() {
        
        if(active) {

            alert("You must dissconnect first")
            return
        }

        setLoading(true)

           
            try {
                await activate(walletconnect, undefined, true)
                
                loggedInAccount = localStorage.setItem("account", account);
                provider = localStorage.setItem("provider", "walletconnect");
                setTimeout(() => {

                    setLoading(false)
                }, 800)
               
            } catch (err) {

                console.log(err)
                deactivate()
                setLoading(false)
            }

            // const data = localStorage.getItem("walletconnect")
            // local.setItem("walletconnect", data)


    }

    async function disconnect() {
        try {

        deactivate()
        web3 = undefined;
        setTimeout(function() {
            alert("you are no longer connected with Metamask")
        }, 250)
        localStorage.removeItem("account");
        localStorage.removeItem("provider");

        } catch (err) {

            console.error(err)
        }
    }


  return { connectOnLoad, connectOnClick, connectOnClickFortmatic, connectOnClickTorus, connectOnClickPortis, connectOnClickWalletConnect, disconnect,  active, account, loading, web3}
}