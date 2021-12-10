import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarStyles';

import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img style={{"alignItems": "left"}} src={logo} alt='logo' height="100px" />
        </NavLink>
        <Bars />
        <NavMenu>
          {/* <NavLink to='/about' activeStyle>
            home
          </NavLink>
          <NavLink to='/services' activeStyle>
           home
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            home
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
           home
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Connect Wallet</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;