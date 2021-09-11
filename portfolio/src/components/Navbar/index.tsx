import React from 'react';

import { NavBar } from './styles';

const Navbar: React.FC = () => {
  return (
    <NavBar>
      <a href="/">Início</a>
      <a>Sobre</a>
      <a>Projetos</a>
      <a>Contato</a>
    </NavBar>
  );
};

export default Navbar;
