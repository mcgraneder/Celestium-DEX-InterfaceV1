import React from 'react';
import { NavContainer, NavWrapper, NavLogo, NavItem, NavElement } from './ApplicatonNavbar';
import ConnectWalletButton from '../Buttons/ConnectWalletButton';

export default function AppNav() {

   
  return (
      
        <div>
            <NavContainer>
                <NavWrapper>
                    {/* <NavLogo>ALPHA-BAETRUM</NavLogo> */}
                    <NavElement>
                        <NavItem>
                            <ConnectWalletButton colour="#262638"></ConnectWalletButton>
                        </NavItem>
                    </NavElement>
                </NavWrapper>
            </NavContainer>
           
        </div>
      );

}
