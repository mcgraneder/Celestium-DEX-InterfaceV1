import React from "react";
import Loader from "react-loader-spinner";
import "./particleStyles.css"
import Particles from "react-tsparticles"
import particlesConfig from "../../config/ParticleJsConfig"


const Particle = () => {

    return (
        <div>
             <div className="particle-content">
                <div className="particle-wrapper">
                <Particles params={particlesConfig}></Particles>
                </div>
            </div>
        </div>
        
       
    )
}

export default Particle