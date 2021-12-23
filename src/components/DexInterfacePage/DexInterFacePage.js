import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../DEX/SideBar/SideBar";
import Nav from "../Navbar/Nav";
import useWeb3 from "../../hooks/useWeb3";
import AppNav from "../ApplicationNavbar/ApplicationNavbarStyles";

const DexInterface = ({ history }) => {

   
    const web3 = useWeb3();
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

        const publicAddress = accounts[0].toLowerCase()
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



        <>
            <AppNav></AppNav>
            <SideBar history={history}></SideBar>   
        </>
    )
}

export default DexInterface;