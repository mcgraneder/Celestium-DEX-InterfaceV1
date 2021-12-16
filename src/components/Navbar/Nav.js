import React from 'react';
import { NavContainer, NavWrapper, NavElement, NavItem, NavLink, ConnectButton, NavLogo, Logo, ButtonText, ButtonText1 } from './NavbarStyles';
import ConnectWalletButton from '../Buttons/ConnectWalletButton';

export default function Nav() {

   
  return (
      
        <div>
            <NavContainer>
                <NavWrapper>
                    <NavLogo>ALPHA-BAETRUM</NavLogo>
                    <NavElement>
                        <NavItem>
                            <ConnectWalletButton></ConnectWalletButton>
                        </NavItem>
                    </NavElement>
                </NavWrapper>
            </NavContainer>
           
        </div>
      );
}
