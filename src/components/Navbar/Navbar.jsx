import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import jcdlogo from "../../assets/jcd-log.png";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  color: white;
  font-style: border;
  background-color: rgb(255, 81, 28);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 5px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      <img src={jcdlogo} width="42px"/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar