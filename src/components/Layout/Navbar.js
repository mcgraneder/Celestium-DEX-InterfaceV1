import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FiMenu } from "react-icons/fi";
import { breakpoints as bp } from "../GlobalStyle";
import ConnectWalletButton from "../Buttons/ConnectWalletButton";
const Grid = styled.div`

    display: Grid;
    background-color: rgb(26,26,39);
    border-bottom: 2px solid rgb(35,35,52);
    grid-template-columns: min-content 1fr min-content;
    height: 59px;
    align-items: stretch;
    padding: 0 24px;
    > div {
        display: flex;
        align-items: center;
        // width: 50px;
    }

    button {

        white-space: nowrap;
        padding: 5px;
    }

    &:first-child {

        

        {
            .icon {
                display: none;
            
            @media(max-width: ${bp.desktop}) {

                display: flex;
               
            }
        }
    }
`;
const Navbar = ({toggle}) => {

    return (

        <Grid>
            <div  >
                <span onClick={toggle}><FiMenu className="icon" style={{fontSize: '25px'}}/></span>
            </div>
            <div className="mid"></div>
            <div>
                {/* <div>mcgrane5</div> */}
                {/* <ConnectWalletButton>Sign Out</ConnectWalletButton> */}
                <ConnectWalletButton height="150" fontsize="15" colour="rgb(89, 115, 254)" width="35"></ConnectWalletButton>
            </div>
        </Grid>
    )
}

export default Navbar;