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
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.1);
    text-decoration: none;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 1, 1);


    i {

        min-height: 22px;
        min-width: 22px;
        font-size: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    span {

        padding-left: 14px;
        line-height: 19px;
        opacity: ${(props) => Number(!props.compact)};
        white-space: nowrap;
        transition: opacity 0.2s cubic-bezier(0.4, 0, 1, 1);

    }

    &:hover {
        text-decoration: none;
        background-color: rgb(35,35,52);
        color: rgb(22,181,127);

    }

`
const NavLink = ({ children, iconName, label, ...rest}) => {

    return (

        <StyledLink  to="/wallet" {...rest}>
            { children || (
                <>
                    <i className={iconName}></i>
                    <span className="label">{label}</span>
                </>
            )}
        </StyledLink>
    )
}

export default NavLink