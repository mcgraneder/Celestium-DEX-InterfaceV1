import { useState, useEffect } from 'react';
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

export const fortmatic = new FortmaticConnector({ 
    apiKey: "pk_test_C102027C0649EF66", 
    chainId: 4
})

export const portis = new PortisConnector({ dAppId: 
    "10c2a4ba-93fc-46d3-8c27-9b9019bea48f",
    networks: [1, 100] 
})

export const torus = new TorusConnector({ chainId: 1 })

export default function useAuth() {

    const [loading, setLoading] = useState(false);


    const [acc, setAcc] = useState("")
    var { active, account, library, connector, activate, deactivate } = useWeb3React()
    
    var accounts;
    var acount
    const web3 = new Web3(window.ethereum);
    var loggedInAccount = localStorage.getItem("account")
    var provider = localStorage.getItem("provider")
    
    async function connectOnLoad() {

        if ( localStorage.getItem("provider") == "injected") provider = injected;
        else if ( localStorage.getItem("provider") == "fortmatic") {

          
            console.log(true)
            provider = fortmatic;
        } 
        else if ( localStorage.getItem("provider") == "torus") {

           
            console.log("torus")
            provider = torus;
        } 


         try {

            await activate(portis).then(function(res) {

                console.log(res)
            })
            
          
        
          } catch (err) {

            console.error(err)
          }
          setTimeout(async function(){

            await activate(portis)

         }, 1600);
        
          loggedInAccount = localStorage.setItem("account", account);
    
    }

    useEffect(() => {
 
        if (loggedInAccount != null) {

            setTimeout(function(){

                // connectOnLoad()
    
             }, 1600);
            //  connectOnLoad()
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
                accounts = await web3.eth.getAccounts()[0];
        
            } catch (err) {

                console.log(err)
            }

            loggedInAccount = localStorage.setItem("account", account);
            provider = localStorage.setItem("provider", "injected");
            setLoading(false)
            
      

    }

    async function connectOnClickFortmatic() {
        
        if(active) {

            alert("You must dissconnect first")
            return
        }

        setLoading(true)

           
            try {
                await activate(fortmatic)
                accounts = await web3.eth.getAccounts()[0];
        
            } catch (err) {

                console.log(err)
            }

            loggedInAccount = localStorage.setItem("account", account);
            provider = localStorage.setItem("provider", "fortmatic");
            setLoading(false)
            
        

    }

    async function connectOnClickTorus() {
        
        if(active) {

            alert("You must dissconnect first")
            return
        }

        setLoading(true)

            
            try {
                await activate(torus)
                accounts = await web3.eth.getAccounts()[0];
        
            } catch (err) {

                console.log(err)
            }

            loggedInAccount = localStorage.setItem("account", account);
            provider = localStorage.setItem("provider", "torus");
            setLoading(false)
            
        

    }

    async function connectOnClickPortis() {
        
        if(active) {

            alert("You must dissconnect first")
            return
        }

        setLoading(true)

           
            try {
                await activate(portis)
                accounts = await web3.eth.getAccounts()[0];
        
            } catch (err) {

                console.log(err)
            }

            loggedInAccount = localStorage.setItem("account", account);
            provider = localStorage.setItem("provider", "portis");
            setLoading(false)
            
            
        

    }

    async function disconnect() {
        try {

        deactivate()
        setTimeout(function() {
            alert("you are no longer connected with Metamask")
        }, 250)
        localStorage.removeItem("account");
        localStorage.removeItem("provider");

        } catch (err) {

            console.error(err)
        }
    }


  return { connectOnLoad, connectOnClick, connectOnClickFortmatic, connectOnClickTorus, connectOnClickPortis, disconnect,  active, account, loading}
}