import React, { useState} from "react";
import { Sidebar, LogoContent, Logo, LogoName, NavList, NavItem, NavItemName, Link, SearchBar, ProfileContent, Profile, ProfileDetails, NameJob, Name, Job, IconWrapper, ButtonWrapper, IconWrapper2, searchBarWrapper, StyledImage, LogoutWrapper } from "./SidebarStyles"
import "boxicons";
import { Wrapper } from "../StyledTitle";
import logo from "../../assets/metamask.png"
import Nav from "../Navbar/Nav";

const SideBar = ({history}) => {

    const [hide, setHide] = useState(true);
    const handleHide = () => setHide(!hide);

    const logoutHandler = () => {

        localStorage.removeItem("authToken");
        history.push("/login");
    }
    return (

        <div>
        
            <Sidebar hide={hide}>
                <LogoContent>
                    <Logo hide={hide}>
                        <IconWrapper>
                            <box-icon name='bar-chart-alt-2' type='solid' color='#ffffff' ></box-icon>
                        </IconWrapper>
                        
                        <LogoName>Alpha Baetrum</LogoName>
                    </Logo>
                    <ButtonWrapper hide={hide}>
                        <box-icon onClick={() => handleHide()} name='menu' color='#ffffff' ></box-icon>
                    </ButtonWrapper>
                    
                </LogoContent>
                <NavList>
                    <NavItem style={{"marginBottom": "10px"}}>
                        <Link>
                            {/* <IconWrapper2>
                                <searchBarWrapper>
                                    <box-icon name='search' ></box-icon>
                                </searchBarWrapper>
                            
                            </IconWrapper2> */}
                            
                            <SearchBar hide={hide} type="text" placeholder="search"></SearchBar>
                        </Link>
                    </NavItem>
                    {/* <Wrapper space={100}></Wrapper> */}
                    <NavItem>
                        <Link>
                            <IconWrapper2>
                            <box-icon name='home' color="#ffffff"></box-icon>
                            </IconWrapper2>
                            <NavItemName hide={hide}>Trade</NavItemName>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link>
                            <IconWrapper2>
                                <box-icon name='home' color="#ffffff"></box-icon>
                            </IconWrapper2>
                            <NavItemName hide={hide}>Wallet</NavItemName>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link>
                            <IconWrapper2>
                                <box-icon name='home' color="#ffffff"></box-icon>
                            </IconWrapper2>
                            <NavItemName hide={hide}>Dashboard</NavItemName>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link>
                            <IconWrapper2>
                                <box-icon name='home' color="#ffffff"></box-icon>
                            </IconWrapper2>
                            <NavItemName hide={hide}>Histroy</NavItemName>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link>
                            <IconWrapper2>
                                <box-icon name='home' color="#ffffff"></box-icon>
                            </IconWrapper2>
                            <NavItemName hide={hide} >Dashboard</NavItemName>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link>
                            <IconWrapper2>
                                <box-icon name='home' color="#ffffff"></box-icon>
                            </IconWrapper2>
                            <NavItemName hide={hide}>Dashboard</NavItemName>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link>
                            <IconWrapper2>
                                <box-icon name='home' color="#ffffff"></box-icon>
                            </IconWrapper2>
                            <NavItemName hide={hide}>Dashboard</NavItemName>
                        </Link>
                    </NavItem>
                </NavList>
                <ProfileContent>
                    <Profile>
                        <ProfileDetails hide={hide}>
                            <StyledImage src={logo}></StyledImage>
                            <NameJob>
                                <Name>Evan McGrane</Name>
                                <Job>Logout</Job>
                            </NameJob>
                            
                        </ProfileDetails>
                        <LogoutWrapper hide={hide} onClick={logoutHandler}>
                    <box-icon name='log-out' color="#ffffff" ></box-icon>
                    </LogoutWrapper>
                    </Profile>
               
                </ProfileContent>
            </Sidebar>
        </div>
    )

}

export default SideBar