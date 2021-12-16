import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Home from "../../../assets/sidebarAssets/home-solid.svg"
import Team from "../../../assets/sidebarAssets/social.svg"
import Calender from "../../../assets/sidebarAssets/sceduled.svg"
import Documents from "../../../assets/sidebarAssets/draft.svg"
import PowerOff from "../../../assets/sidebarAssets/power-off-solid.svg"
import { NavLink } from "react-router-dom";
import { Wrapper } from "../../StyledTitle";


const Container = styled.div`
  position: fixed;
//   display: none;
    transition: all 0.5s ease;


  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

export const Button = styled.button`
  background-color: rgb(35,35,52);
  border: none;
  width: 3rem;
  height: 3rem;
//   border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: rgb(22,181,127);
    height: 3px;
    width: 2rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    bottom: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

//   &::after {
//     top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
//     transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
//   }
`;

const SidebarContainer = styled.div`
  background-color: rgb(35,35,52);
  width: 3.5rem;
  height: 60vh;
  margin-top: 1rem;
  border-right: 1px solid rgb(22,181,127);
  border-top: 1px solid rgb(22,181,127);
  border-bottom: 1px solid rgb(22,181,127);
  border-radius: 0 20px 20px 0;
  padding-top: 0.5rem;
  padding-bottom: 0.1rem;
//   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  display: ${(props) => (props.hide ? `none`: `flex`)}
//   transition: all 0.5s ease;
`;

// const Logo = styled.div`
//   width: 2rem;
//   img {
//     width: 100%;
//     height: auto;
//   }
// `;

const SlickBar = styled.ul`
  color: rgb(22,181,127);
  list-style: none;
  display: flex;
//   border-right: 1px solid rgb(22,181,127);
//   border-top: 1px solid rgb(22,181,127);
//   border-bottom: 1px solid rgb(22,181,127);
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.clicked ? "rgb(35,35,52)" : "transparent")};
  padding: 1.2rem 5px;
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props) => (props.clicked ? "9rem" : "3.2rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
  
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: white;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid rgb(22,181,127);
    background-color: #34344d;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.6rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "11rem" : "1rem")};
  height: 3rem;
  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "8rem" : "0")};
  background-color: ${(props) => (props.clicked ? "rgb(35,35,52)" : "transparent")};;
  color: white;
  transition: all 0.3s ease;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 30%;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  img {
    width: 100%;
    height: auto;
    filter: invert(58%) sepia(24%) saturate(2235%) hue-rotate(117deg) brightness(90%) contrast(83%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const SideBar = ({history}) => {

  const [click, setClick] = useState(false);
  const [hide, setHide] = useState(false);
  const handleHide = () => setHide(!hide);
  const handleClick = () => setClick(!click);
  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {

      if (!localStorage.getItem("authToken")) {

          history.push("/login")
      }

      const fetchPrivateData = async () => {

          const config = {

              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("authToken")}`
              }
          }

          try {

              const {data} = await axios.get("/api/private", config);
              setPrivateData(data.data);

          } catch(error) {

              localStorage.removeItem("authToken");
              setError("You are not authorised please login again");

          }
      }

      fetchPrivateData();

  }, [history])

  const logoutHandler = () => {

      localStorage.removeItem("authToken");
      history.push("/login");
  }
  
  console.log(error, privateData)

  return  (
    <Container>
        <Button hide={hide} onClick={() => handleHide()}></Button>
      <SidebarContainer hide={hide}>
        <Button clicked={click} onClick={() => handleClick()}/>
        <SlickBar clicked={click}>
          <Item onClick={() => setClick(false)} exact activeClassName="active" to="/trade">
            <img src={Home} alt="Home" />
            <Text clicked={click}>Home</Text>
          </Item>
          <Wrapper space={20}/>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/trade/wallet">
            <img src={Team} alt="Team" />
            <Text clicked={click}>Wallet</Text>
          </Item>
          <Wrapper space={20}/>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/trade/tokeninfo">
            <img src={Calender} alt="Calender" />
            <Text clicked={click}>Token Info</Text>
          </Item>
          <Wrapper space={20}/>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/trade/profile">
            <img src={Documents} alt="Documents" />
            <Text clicked={click}>Profile</Text>
          </Item>
        </SlickBar>
        <Profile clicked={profileClick}>
          <img onClick={() => handleProfileClick()} src="https://picsum.photos/200" alt="Profile"/>
          <Details clicked={profileClick}>
            <Name><h4>Logout</h4><a href="/#">view&nbsp;profile</a></Name>
            <Logout onClick={logoutHandler}><img src={PowerOff} alt="logout" /></Logout>
          </Details>
        </Profile>
      </SidebarContainer>
    </Container>
    
  );
};

export default SideBar;