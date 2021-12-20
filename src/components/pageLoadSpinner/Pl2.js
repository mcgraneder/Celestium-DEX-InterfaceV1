import React from "react";
import Loader from "react-loader-spinner";
import "./ps.css"

const Pl2 = () => {

    return (
        <div>
             <div className="loader-content1">
                <div className="loader-wrapper1">
                    <Loader type="ThreeDots" color={`rgb(89,115,254)`} height={50} width={100}/>
                </div>
            </div>
        </div>
        
       
    )
}

export default Pl2