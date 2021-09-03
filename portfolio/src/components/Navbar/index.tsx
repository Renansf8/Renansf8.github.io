import React from 'react';

import { NavBar } from './styles';

const Navbar: React.FC = () => {
  return (
    <NavBar>
      <a href="/">Home</a>
      <a>About</a>
      <a>Projetos</a>
    </NavBar>
  );
};

export default Navbar;
