import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../DEX/SideBar/SideBar";
import Navbar from "../Navbar/Navbar";

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

    const logoutHandler = () => {

        localStorage.removeItem("authToken");
        history.push("/login");
    }


    return (
        <>
            {/* <div>{privateData}</div> */}
            {/* <button onClick={logoutHandler}>Logout</button> */}
            <Navbar></Navbar>
            <SideBar></SideBar>
            {/* <SideBar></SideBar> */}

            
        </>
    )
}

export default DexInterface;