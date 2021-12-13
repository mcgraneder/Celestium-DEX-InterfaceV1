import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`

    // position: fixed;
  background: rgb(26,26,39);
  border-bottom: 2px solid rgb(35,35,52);
  height: 90px;
  display: flex;
//   padding: 0.5rem calc((100vw - 1000px) / 2);
    
  z-index: 10;

  justify-content: flex-start;

  
`;


export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-right: 2px solid rgb(35,35,52);

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;


  width: 100vw;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
  justify-content: flex-end;
  width: 100vw;

  @media screen and (max-width: 768px) {
    display: none;
  }

  
`;

export const NavBtnLink = styled.button`
  border-radius: 15px;
  width: 180px;
  height: 40px;
  background: rgb(89,115,254);
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;


  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(77, 102, 235);
    color: #010606;
  }
`;