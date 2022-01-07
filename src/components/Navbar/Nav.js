import React from 'react';
import ConnectWalletButton from '../Buttons/ConnectWalletButton';
import { NavContainer, 
         NavWrapper, 
         NavElement, 
         NavItem, 
         NavLogo
} from './NavbarStyles';

export default function Nav({close}) {

  return (
      
        <div>
            <NavContainer>
                <NavWrapper>
                    <NavLogo>ALPHA-BAETRUM</NavLogo>
                    <NavElement>
                        <NavItem>
                            <ConnectWalletButton left={"82%"} top={"31%"} close={close} height="180" fontsize="17" colour="rgb(89, 115, 254)" width="40"></ConnectWalletButton>
                        </NavItem>
                    </NavElement>
                </NavWrapper>
            </NavContainer>
           
        </div>
      );
}
