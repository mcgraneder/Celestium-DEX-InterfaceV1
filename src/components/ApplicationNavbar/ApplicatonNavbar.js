import styled from "styled-components";


export const NavContainer = styled.div`

// z-index: 99;
    
    background-color: rgb(26,26,39);
    background: rgb(26,26,39);
    width: 85%;
    height: 60px;
    position: fixed;
    border-bottom: 2px solid rgb(35,35,52);
    

`
export const NavWrapper = styled.div`


    height: 60px;
    padding: 10px;

   
`

export const NavElement = styled.div`


    float: right;
    border-left: 2px solid rgb(35,35,52);
    vertical-align: middle;


`

export const NavItem = styled.div`

    display: inline-block;
    line-height: 25px;
    align-items: center;
    height: 40px;
    margin: 0 5px;
    padding-right: 30px;
    padding-left: 20px;
    
`
export const NavLink = styled.div`

    color: White;
    font-size: 17px;
    text-transform: uppercase;
`

export const NavLogo = styled.label`

    color: White;
    font-size: 35px;
    line-height: 50px;
    font-wight: bold;
    padding: 0 40px;
    border-right: 2px solid rgb(35,35,52);
`
