import React from "react";
import Loader from "react-loader-spinner";
import "./PageLoadSpinnerStyles.css"



const PageLoad = () => {

    return (
        <div>
             <div className="loader-content">
                <div className="loader-wrapper">
                    <Loader type="ThreeDots" color={`rgb(22,181,127)`} height={50} width={100}/>
                </div>
            </div>
        </div>
        
       
    )
}

export default PageLoad