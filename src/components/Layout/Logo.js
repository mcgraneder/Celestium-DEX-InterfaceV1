import metamaskLogo from "../../assets/logo_transparent_background1.png"
import { StyledLink } from "./LogoStyles";

const Logo = (props) => {

    return (
    
        <StyledLink {...props} to="/">
            <img src={metamaskLogo} width="45"></img>
             <span>Alpha-Baetrum</span>  
        </StyledLink>
    )
}

export default Logo