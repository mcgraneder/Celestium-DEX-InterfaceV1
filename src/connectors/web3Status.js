import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

const Web3Status = ({setWeb3}) => {

    // const [web3, setWeb3] = useState()
    const {active, library } = useAuth()


    useEffect(() => {

        if(active) {
          
           setWeb3(library)
        }
       
    }, [active, library])

    // return { web3, setWeb3 }
}

export default Web3Status