import React from "react";
import Loader from "react-loader-spinner";
import "./ps.css"

const Pl2 = () => {

    return (
        <div>
             <div className="loader-content1">
                <div className="loader-wrapper1">
                    <Loader type="ThreeDots" color={`rgb(22,181,127)`} height={50} width={100}/>
                </div>
            </div>
        </div>
        
       
    )
}

export default Pl2