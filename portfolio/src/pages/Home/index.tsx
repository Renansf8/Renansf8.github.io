import React from 'react';
import Navbar from '../../components/Navbar';
import { BiRightArrowAlt } from 'react-icons/bi';

import { Header } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header>
        <p>Olá, eu sou </p>
        <h1>Renan Santiago Ferreira</h1>
        <h3>Desenvolvedor front end</h3>
        <button type="button">
          Projetos <BiRightArrowAlt size={22} />
        </button>
      </Header>
    </>
  );
};

export default Home;
