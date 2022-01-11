import React, { useState, useEffect } from "react"
import Web3 from "web3"
import Fortmatic from 'fortmatic';
import Portis from "@portis/web3"
import Torus from "@toruslabs/torus-embed";
import { ethers } from "ethers";
import axios from "axios";
import WalletConnectProvider from "@walletconnect/web3-provider"

const useProvider = () => {


    var web3;
    var provider1;
    
    if(localStorage.getItem("provider") === "fortmatic") {

        const fm = new Fortmatic('pk_test_C102027C0649EF66');
        window.web3 = new Web3(fm.getProvider());
        web3 = window.web3
    }

    else if(localStorage.getItem("provider") === "portis") {

        const portis = new Portis("10c2a4ba-93fc-46d3-8c27-9b9019bea48f", "rinkeby");
        web3 = new Web3(portis.provider);

        
    }
    else if(localStorage.getItem("provider") === "torus") {

        const torus = new Torus()
        torus.init();
        torus.login(); 
        web3 = new Web3(torus.provider);

    }
    else if (localStorage.getItem("provider") === "walletconnect") {

        provider1 = new WalletConnectProvider({
            infuraId: "ba5ee6592e68419cab422190121eca4c",
        });
          
        provider1.enable();
        web3 = new Web3(provider1);

    }
    else {

        web3 = new Web3(window.ethereum);
    }
    
    

    console.log(web3);

    const accounts = web3.eth.getAccounts();
    console.log(accounts)

    return web3;


}

export default useProvider;