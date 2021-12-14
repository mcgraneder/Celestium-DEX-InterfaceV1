import { Fade } from "@material-ui/core";
import React from "react";
import Loader from "react-loader-spinner";
import "./PageLoadSpinnerStyles.css"



const PageLoad = () => {

    return (
        <div>
             <div class="loader-content">
                <div class="loader-wrapper">
                    <Loader type="ThreeDots" color={`rgb(22,181,127)`} height={50} width={100}/>
                </div>
            </div>
        </div>
        
       
    )
}

export default PageLoad