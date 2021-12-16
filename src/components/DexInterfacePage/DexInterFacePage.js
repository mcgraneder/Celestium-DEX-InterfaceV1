import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../DEX/SideBar/SideBar";
import Nav from "../Navbar/Nav";

const DexInterface = ({ history }) => {

    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

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

    console.log(privateData, error)




    return (

        <>
            <Nav></Nav>
            <SideBar></SideBar>   
        </>
    )
}

export default DexInterface;