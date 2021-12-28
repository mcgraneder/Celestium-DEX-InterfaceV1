import styled from "styled-components";
import { NavLink as Link} from "react-router-dom";
import { FiMenu, FiSettings } from "react-icons/fi";
import { BiWallet } from "react-icons/bi"
import { AiOutlineStock } from "react-icons/ai"
import { GrTransaction } from "react-icons/gr"
import { BsCashCoin } from "react-icons/bs"
import { MdLogout} from "react-icons/md"

export const StyledLink = styled(Link)`

    min-height: 56px;
    display: flex;
    align-items: center;
    padding: 5px 24px;
    font-size: 17px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    // box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.1);
    text-decoration: none;

    .link {

        min-height: 30px;
        min-width: 30px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 
    }

    span {

        padding-left: 14px;
        line-height: 19px;
        opacity: ${(props) => Number(!props.compact)};
    }

    &:hover {
        text-decoration: none;
        background-color: rgba(255 255 255 / 5%);
    }

`
const NavLink = ({ children, iconName, label, ...rest}) => {

    return (

        <StyledLink  to="/wallet" {...rest}>
            { children || (
                <>
                    <div className="link">
                        {iconName}
                    </div>
                    <span className="label">{label}</span>
                </>
            )}
        </StyledLink>
    )
}

export default NavLink