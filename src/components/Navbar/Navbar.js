import React, { useState, useEffect } from 'react';
// import Web3 from "web3"
import web3Modal from "web3modal"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarStyles';

import logo from "../../assets/logo.png"
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { useWeb3React } from "@web3-react/core"


import { InjectedConnector } from '@web3-react/injected-connector'

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 43114],
})
// function init() {
var web3;
var accounts;
var connected


export default function Navbar() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()
    if (typeof window !== 'undefined') {
        console.log('we are running on the client')
    } else {
        console.log('we are running on the server');
    }


    var acc = localStorage.getItem("account")
    console.log(acc)
// localStorage.removeItem("account");


	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');
            web3 = new Web3(window.ethereum);

			window.ethereum.request({ method: 'eth_requestAccounts'})
			
		} else {
			console.log('Need to install MetaMask');
			// setErrorMessage('Please install MetaMask browser extension to interact');
		}
        console.log(web3.eth.currentProvider)
	}

    async function connectOnLoad() {

         try {
            await activate(injected)
            connected = true
          } catch (ex) {
            console.log(ex)
          }
          var accounts1 = await web3.eth.getAccounts();
          console.log(accounts1)
          acc = localStorage.setItem("account", accounts1);
          console.log(acc)
    }

    useEffect(() => {

            
        if (acc != null) {
        connectOnLoad()
        }
        connectWalletHandler()
    }, [])


    async function connectOnClick() {
        
        if (localStorage.getItem("account") == null) {

            try {
                await activate(injected)
                connected = true
            } catch (ex) {
                console.log(ex)
            }window.location.reload();
            var accounts1 = await web3.eth.getAccounts();
            console.log(accounts1)
            acc = localStorage.setItem("account", accounts1);
            console.log(acc)
            
        } else {

            disconnect();
            connected = false
        }

    }

    async function disconnect() {
        try {
        deactivate()
        localStorage.removeItem("account");
        } catch (ex) {
        console.log(ex)
        }
    }

    function accountsChanegHandler() {
        window.location.reload();
    }

    window.ethereum.on('accountsChanged', accountsChanegHandler);


  return (
      
        <div>
          <Nav>
            <NavLink to='/'>
              <img style={{"alignItems": "left"}} src={logo} alt='logo' height="100px" />
            </NavLink>
            <Bars />
            <NavMenu>
              {/* <NavLink to='/about' activeStyle>
                home
              </NavLink>
              <NavLink to='/services' activeStyle>
               home
              </NavLink>
              <NavLink to='/contact-us' activeStyle>
                home
              </NavLink>
              <NavLink to='/sign-up' activeStyle>
               home
              </NavLink> */}
              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
            <NavBtn>
    
              {active ? <NavBtnLink onClick={connectOnClick}>{account.substring(0, 6)}...{account.substring(account.length - 4)}</NavBtnLink> : <NavBtnLink onClick={connectOnClick}>Connect Wallet</NavBtnLink>}
            </NavBtn>
          </Nav>
        </div>
      );
   

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <button onClick={connectOnClick} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>
//       {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
//       <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button>
//     </div>
//   )
}
