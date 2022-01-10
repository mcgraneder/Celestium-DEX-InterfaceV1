
import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Web3 from "web3";
import axios from "axios";
import Modal from "../AccountsChangeModal/AccountsChangeModal";
import Fortmatic from 'fortmatic';
import Portis from "@portis/web3"
import Torus from "@toruslabs/torus-embed";
import WalletConnectProvider from "@walletconnect/web3-provider"
import NotCurrentUserModal from "../AccountsChangeModal/NotCurrentUserModal";
import { 
         Grid,
         GridSidebar,
         GridHeader,
         GridMain
 } from "./LayoutStyles";

const Layout = memo(({history}) => {

    var publicAddress
    var  web3
    var provider1
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const toggle = () => setShow(!show);
    const toggle1 = () => setShow1(!show1);
    const [privateData, setPrivateData] = useState("");
    const email = localStorage.getItem("email")
    
    useEffect(() => {

        if (localStorage.getItem("registered")) {

            console.log("its true")
            if(localStorage.getItem("notCurrent")) {

                setShow(true)
            }
            else {
                setShow1(true);
            }
           
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

            }
        }

        fetchPrivateData();

    }, [history])

    useEffect(() => {

        window.ethereum.on('accountsChanged', async function () {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            if(localStorage.getItem("provider") === "fortmatic") {

                const fm = new Fortmatic('pk_test_C102027C0649EF66');
                window.web3 = new Web3(fm.getProvider());
                web3 = window.web3
                console.log(web3)
            }

            else if(localStorage.getItem("provider") === "portis") {

                const portis = new Portis("10c2a4ba-93fc-46d3-8c27-9b9019bea48f", "rinkeby");
                web3 = new Web3(portis.provider);

                
            }
            else if(localStorage.getItem("provider") === "torus") {

                const torus = new Torus()
                await torus.init();
                await torus.login(); 
                web3 = new Web3(torus.provider);

                
            }
            else if (localStorage.getItem("provider") === "walletconnect") {

                provider1 = new WalletConnectProvider({
                    infuraId: "ba5ee6592e68419cab422190121eca4c",
                  });
                  
                  await provider1.enable();
                  web3 = new Web3(provider1);
            }
            else {
                web3 = new Web3(window.ethereum);
            }
        
        publicAddress = await web3.eth.getCoinbase()
       
        try {

            const {data} = await axios.post("https://alpha-baetrum.herokuapp.com/api/users/useraddress", { publicAddress, email }, config)
            console.log(data)

            if(data.type == "currentUser") {

                setShow1(false);
                setShow(false);   
                localStorage.removeItem("registered")
                localStorage.removeItem("notCurrent")
            }
            if (data.type == "notCurrentUser") {

                setShow1(false);
                setShow(true);   
                localStorage.setItem("notCurrent", true)
                localStorage.setItem("registered", true)
                
            }
           
            

        } catch (err) {

            setShow1(true); 
            setShow(false);   
            localStorage.setItem("registered", true)
            localStorage.removeItem("notCurrent")
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
            <NotCurrentUserModal visible={show} close={toggle}></NotCurrentUserModal>
            <Modal visible={show1} close={toggle1}></Modal>
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