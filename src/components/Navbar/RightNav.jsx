import styled from 'styled-components';
import React from 'react'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    font-
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

function scrollQuemSomos() {
  const element = document.getElementById("quemsomos");
  element.scrollIntoView();
}


function scrollParceiros() {
  const element = document.getElementById("parceiros");
  element.scrollIntoView();
}

function scrollChurrasqueiras() {
  const element = document.getElementById("churrasqueiras");
  element.scrollIntoView();
}

function scrollContato() {
  const element = document.getElementById("footer");
  element.scrollIntoView();
}

const RightNav = ({ open }) => {
  
  return (
    <Ul open={open}>
      <li onClick={scrollQuemSomos}>Quem Somos</li> {/*onClick={scrollQuemSomos}*/}
      <li onClick={scrollParceiros}>Parceiros</li>
      <li onClick={scrollChurrasqueiras}>Churrasqueiras</li>
      <li onClick={scrollChurrasqueiras}>Nossos Produtos</li>
      <li onClick={scrollContato}>Contato</li>
    </Ul>
  )
}

export default RightNav;