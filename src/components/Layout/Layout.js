
import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import AppNav from "../ApplicationNavbar/ApplicationNavbarStyles";
import Navbar from "./Navbar";

import axios from "axios";
import useWeb3 from "../../hooks/useWeb3";
import Modal from "../AccountsChangeModal/AccountsChangeModal";
import { StyledContainer } from "../StyledContainer";


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
    const  web3  = useWeb3();
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

                const {data} = await axios.get("/api/private", config);
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
        publicAddress = await web3.eth.getCoinbase()
        // publicAddress = publicAddress.toLowerCase()
    
        try {

            const {data} = await axios.post("/api/users/useraddress", { publicAddress }, config)
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