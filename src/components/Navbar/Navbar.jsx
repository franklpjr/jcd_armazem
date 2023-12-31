import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import jcdlogo from "../../assets/jcd-log.png";

{/*rgb(255, 81, 28)*/}

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  color: white;
  font-style: border;
  background-color: rgb(228, 61, 0);
  font-weight: bolder;
  position: fixed;
  padding: 0 20px;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  .logo {
    margin-top: 7.5px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={jcdlogo} width="40px"/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar