import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 43114],
})


export default function useAuth() {

    const [loading, setLoading] = useState(false)
    var { active, account, library, connector, activate, deactivate } = useWeb3React()
    
    var accounts;
    var acount
    const web3 = new Web3(window.ethereum);
    var loggedInAccount = localStorage.getItem("account")
    
    async function connectOnLoad() {

         try {

            await activate(injected)
        
          } catch (err) {

            console.error(err)
          }
        
          loggedInAccount = localStorage.setItem("account", account);
    
    }

    useEffect(() => {
 
        if (loggedInAccount != null) {

            connectOnLoad()
        }

    }, [])


    async function connectOnClick() {
        
        if (localStorage.getItem("account") == null) {

            setLoading(true);
            try {
                await activate(injected)
                accounts = await web3.eth.getAccounts()[0];
        
            } catch (err) {

                console.log(err)
            }

            loggedInAccount = localStorage.setItem("account", account);
            setTimeout(function(){

                setLoading(false)

             }, 1600);
            
        } else {

            disconnect();
    
        }

    }

    async function disconnect() {
        try {

        deactivate()
        setTimeout(function() {
            alert("you are no longer connected with Metamask")
        }, 250)
        localStorage.removeItem("account");

        } catch (err) {

            console.error(err)
        }
    }


  return { connectOnLoad, connectOnClick, active, account}
}