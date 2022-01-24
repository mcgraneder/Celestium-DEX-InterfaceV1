import React from 'react';
import ConnectWalletButton from '../Buttons/ConnectWalletButton';
import { NavContainer, 
         NavWrapper, 
         NavElement, 
         NavItem, 
         NavLogo
} from './Nav2Styles';
import useAuth from '../../hooks/useAuth';

export default function Nav2({close}) {

  const {connectOn} = useAuth()
  return (
      
        <div>
            <NavContainer>
                <NavWrapper>
                    <NavElement>
                        <NavItem>
                            <ConnectWalletButton left={"82%"} top={"31%"} close={close} onclick={connectOn}height="180" fontsize="17" colour="rgb(89, 115, 254)" width="40"></ConnectWalletButton>
                        </NavItem>
                    </NavElement>
                </NavWrapper>
            </NavContainer>
           
        </div>
      );
}
