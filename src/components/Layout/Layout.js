
import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import AppNav from "../ApplicationNavbar/ApplicationNavbarStyles";
import Navbar from "./Navbar";
import Web3 from "web3";
import axios from "axios";
import useWeb3 from "../../hooks/useWeb3";
import Modal from "../AccountsChangeModal/AccountsChangeModal";
import { StyledContainer } from "../StyledContainer";
import Fortmatic from 'fortmatic';
import { PortisConnector } from '@web3-react/portis-connector'
import useAuth from "../../hooks/useAuth";
import Portis from "@portis/web3"
import Torus from "@toruslabs/torus-embed";
import { toruss } from "../../connectors/providers";
import WalletConnectProvider from "@walletconnect/web3-provider"
import { ethers } from "ethers";

export const Backdrop = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 1;
    pointer-events: none;
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.2);
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1) !important;
    z-index: 20000;
    pointer-events: auto
    
`

const Grid = styled.div`

    display: grid;
    grid: "nav header" min-content
                   "nav main" 1fr / min-content 1fr;
    min-height: 100vh;    
`

const GridSidebar = styled.div`

    grid-area: nav;
    // background-color: black;
    // border-right: 2px solid rgb(35,35,52);
    z-index: 2000;
`

const GridHeader = styled.div`

    grid-area: header;
    // background-color: blue;
    color: White;
`

const GridMain = styled.div`

    grid-area: main;
    // background-color: red;
    color: White;
`

const Layout = memo(({history}) => {

    var publicAddress
    var  web3
    var provider1
    const [show, setShow] = useState(0);
    const [show1, setShow1] = useState(false);
    const toggle = () => setShow(Number(!show));
    const toggle1 = () => setShow1(!show1);
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    
    
    
    

    useEffect(() => {

        

        if (localStorage.getItem("registered")) {

            console.log("its true")
            setShow1(true);
         }
         else {

            setShow(false)
         }

        if (!localStorage.getItem("authToken")) {

            history.push("/login")
        }

        

        const fetchPrivateData = async () => {

            const config = {

                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            }

            try {

                const {data} = await axios.get("https://alpha-baetrum.herokuapp.com/api/private", config);
                setPrivateData(data.data);

            } catch(error) {

                localStorage.removeItem("authToken");
                setError("You are not authorised please login again");

            }
        }

        fetchPrivateData();

        

    }, [history])

    useEffect(() => {

        window.ethereum.on('accountsChanged', async function (accounts) {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            if(localStorage.getItem("provider") == "fortmatic") {

                const fm = new Fortmatic('pk_test_C102027C0649EF66');
                window.web3 = new Web3(fm.getProvider());
                web3 = window.web3
                console.log(web3)
            }

            else if(localStorage.getItem("provider") == "portis") {

                const portis = new Portis("10c2a4ba-93fc-46d3-8c27-9b9019bea48f", "rinkeby");
                web3 = new Web3(portis.provider);

                
            }
            else if(localStorage.getItem("provider") == "torus") {

                const torus = new Torus()
                await torus.init();
                await torus.login(); // await torus.ethereum.enable()
                web3 = new Web3(torus.provider);

                
            }
            else if (localStorage.getItem("provider") == "walletconnect") {

                provider1 = new WalletConnectProvider({
                    infuraId: "ba5ee6592e68419cab422190121eca4c",
                  });
                  
                  //  Enable session (triggers QR Code modal)
                  await provider1.enable();
                  web3 = new Web3(provider1);
            }
            else {
                web3 = new Web3(window.ethereum);
            }
        
        publicAddress = await web3.eth.getCoinbase()
        // publicAddress = publicAddress.toLowerCase()
    
        try {

            const {data} = await axios.post("https://alpha-baetrum.herokuapp.com/api/users/useraddress", { publicAddress }, config)
            setShow1(false);
            
            localStorage.removeItem("registered")
            

        } catch (err) {

            setShow1(true);
                
            localStorage.setItem("registered", true)
        }
    })


    }, [publicAddress])
    
    const logoutHandler = () => {

        localStorage.removeItem("authToken");
        localStorage.removeItem("email")
        history.push("/login");
    }
    


    return (

        
        
        <>
            <Modal visible={show1} close={toggle1}></Modal>
            {/* <Backdrop></Backdrop> */}
            <Grid>
                <GridSidebar>
                    <Sidebar visible={show} close={toggle} logout={logoutHandler} />
                </GridSidebar>
                <GridHeader>
                    <Navbar toggle={toggle}></Navbar>
                </GridHeader>
                <GridMain>
                    main Content
                </GridMain>
            </Grid>
        </>

    )
})

export default Layout