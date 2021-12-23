import styled from "styled-components";

export const Sidebar = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.4s ease;
    height: 80%;
    width: ${(props) => (props.hide ? "240px" : "30px")};
    background: rgb(26,26,39);
    padding: 6px 14px;
    border-right: 2px solid  rgb(35,35,52);
`;

export const LogoContent = styled.div``;

export const Logo = styled.div`

    color: White;
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    font-size: 20px;
    line-height: 20px;
    opacity: ${(props) => (props.hide ? "1" : "0")};
    pointer-events: none;
    // transition: all 0.1s ease;
`;

export const IconWrapper = styled.div`

    // fonst-size: 50px;
    margin-right: 5px;
`
export const LogoName = styled.div`

    display: block;
    font-size: 20px;
    font-weight: 400;
`;

export const ButtonWrapper = styled.div`

    position: absolute;
    left: ${(props) => (props.hide ? "90%" : "45%")};
    top: 6px;
    font-size: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 62px;
    transform: translateX(-50%)
`

export const NavList = styled.ul`

    margin-top: 20px;
    color: white;
`;

export const NavItem = styled.li`

    position: relative;
    height: 50px;
    width: 95%;
    margin: 0 auto;
    list-style: none;
    line-height: 10px;
    // padding-left: 12px;
    transition: all 0.4s ease;
    border-radius: 10px;
    // z-index: -2;
    margin-bottom: 10px;
    

    &:hover {
        color: black;
        background:  rgb(35,35,52);
        // z-index: -2;
    }
`

export const NavItemName = styled.span`

    opacity: ${(props) => (props.hide ? "1" : "0")};
    pointer-events: auto;
`;

export const Link = styled.a`

    color: white;
    display: flex;
    align-items: center;
    // padding-left: 5px;
    text-decoration: none;
    line-height: 50px;
    
    
`

export const IconWrapper2 = styled.div`

    
    height: 40px;
    min-width: 50px;
    border-radius: 12px;
    text-align: center;
`;

export const searchBarWrapper = styled.div`

    position: absolute;
    z-index: 1000;
   
    

    
`

export const SearchBar = styled.input`

    position: absolute;
    height: 100%;
    width: 78%;
    left: 0;
    top: 0;
    border-radius: 10px;
    outline: none;
    border: none;
    background: rgb(35,35,52);
    padding-left: 50px;
    font-size: 18px;
    color: #fff;
    opacity: ${(props) => (props.hide ? "1" : "0")};
    transition: all 0.2s ease;
`;

export const ProfileContent = styled.div`

    position: absolute;
    color: White;
    bottom: 20px;
    left: 0;
    width: 90%;
    border-radius: 10px;
    margin: 10px;
    // padding-left: 10px;
    // margin-right: 10px;

    &:hover {
        // color: black;
        background:  rgb(35,35,52);
        // z-index: -2;
    }
`;

export const Profile = styled.div`

    position: relative;
    padding: 20px 15px;
    // padding: 10px 10px;
    height: 40px;
    width: 185px;
    
`;

export const ProfileDetails = styled.div`

    display: flex;
    align-items: center;
    opacity: ${(props) => (props.hide ? "1" : "0")};
    pointer-events: auto;
`;

export const StyledImage = styled.img`

    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 12px;
`

export const NameJob = styled.div`

    margin-left: 10px;
`;

export const Name = styled.div`

    font-size: 15px;
    font-weight: 400;
`;

export const Job = styled.div`

    font-size: 13px;
`;

export const LogoutWrapper = styled.div`

    position: absolute;
    left: ${(props) => (props.hide ? "90%" : "10%")};;
    bottom: 5px;
   
    transfrom: translateX(-50%);
    line-height: 50px;
    font-size: 20px;
    border-radius: 12px;
`;

