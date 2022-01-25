import { useState, useEffect, useRef } from 'react';
import { useWeb3React } from "@web3-react/core"
import { injected, 
         fortmatic, 
         portis, 
         torus, 
         walletconnect 
} from "../connectors/providers";

export default function useAuth() {

    const [loading, setLoading] = useState(false);
    const [onPageLoading, setOnPageLoading] = useState(false)
    const [acc, setAcc] = useState("")
    const web32 = useRef(null)
    const [address, setAddress] = useState()
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
           
                // injected.isAuthorized().then((isAuthorized) => {
                //   if (isAuthorized) {
                //     activate(provider);
                //     deactivate()
                //     activate(provider)
                //   }
                // });
           
           
          
          } catch (err) {

            console.error(err)
            deactivate()
            // localStorage.removeItem("provider");

            setOnPageLoading(false)
          }
          setOnPageLoading(false)
       
    }

    useEffect(() => {
 
       setAddress(account);

       localStorage.setItem("account", account)

    }, [account])

    useEffect(() => {
 
        if (!active) {

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
                await activate(provider, undefined, true)
                localStorage.setItem("provider", provider1);
               
                setTimeout(() => {

                    setLoading(false)
                    console.log(account)
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


  return { connectOnLoad, disconnect, connectOn, address, setAddress, active, account, loading, library, onPageLoading}
}