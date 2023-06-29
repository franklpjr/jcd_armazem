import styled from 'styled-components';
import React from 'react'



const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: gray;
    position: fixed;
    z-index: 4;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Quem Somos</li>
      <li>Parceiros</li>
      <li>Churrasqueiras</li>
      <li>Nossos Produtos</li>
      <li>Contato</li>
    </Ul>
  )
}

export default RightNav