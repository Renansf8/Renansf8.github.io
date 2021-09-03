import React from 'react';
import Navbar from '../../components/Navbar';

import { Header } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header>
        <p>Olá, eu sou </p>
        <h1>Renan Santiago Ferreira</h1>
        <h3>Desenvolvedor front end</h3>
      </Header>
    </>
  );
};

export default Home;
