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
  if (window.matchMedia('(max-width: 767px)').matches) {
      window.scrollTo(0, 407);
  } else {
      window.scrollTo(0, 697);
  }
}

function scrollParceiros() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    window.scrollTo(0, 1975);
  } else {
    window.scrollTo(0, 1537);
  }
}

function scrollChurrasqueiras() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    window.scrollTo(0, 2325);
  } else {
    window.scrollTo(0, 1897);
  }
}

function scrollContato() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    window.scrollTo(0, 3900);
  } else {
    window.scrollTo(0, 2597);
  }
}

const RightNav = ({ open }) => {
  
  return (
    <Ul open={open}>
      <li onClick={scrollQuemSomos}>Quem Somos</li>
      <li onClick={scrollParceiros}>Parceiros</li>
      <li onClick={scrollChurrasqueiras}>Churrasqueiras</li>
      <li onClick={scrollChurrasqueiras}>Nossos Produtos</li>
      <li onClick={scrollContato}>Contato</li>
    </Ul>
  )
}

export default RightNav;