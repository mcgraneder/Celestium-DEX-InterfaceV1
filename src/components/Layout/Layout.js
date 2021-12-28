
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import AppNav from "../ApplicationNavbar/ApplicationNavbarStyles";
import Navbar from "./Navbar";
import { Backdrop } from "./Sidebar";
import axios from "axios";
import useWeb3 from "../../hooks/useWeb3";

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

const Layout = ({history}) => {

    const  web3  = useWeb3();
    console.log(web3)
    const [show, setShow] = useState(0);
    const toggle = () => setShow(Number(!show));
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
    const publicAddress = async() => {

       return await web3.eth.getCoinbase();
    }
    // const publicAddress = await web3.eth.getCoinbase();

    useEffect(() => {

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

    window.ethereum.on('accountsChanged', async function (accounts) {

        const publicAddress = await web3.eth.getCoinbase()
        // console.log("heyyyyyy", publicAddress)
        fetch(
			`/api/users?publicAddress=${publicAddress}`
		).then(async (response) => {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            console.log(response)
            const {data} = await axios.post("/api/users/wallet", config);
            console.log(data)
        })
    })
    


    return (

        <Grid>
            <GridSidebar>
                <Sidebar visible={show} close={toggle}/>
            </GridSidebar>
            <GridHeader>
                <Navbar toggle={toggle}></Navbar>
            </GridHeader>
            <GridMain>
                main Content
            </GridMain>
        </Grid>
    )
}

export default Layout