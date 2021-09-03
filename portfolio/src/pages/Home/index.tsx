import React from 'react';
import Navbar from '../../components/Navbar';
import { BiRightArrowAlt } from 'react-icons/bi';

import { Header, Skills } from './styles';
import responsive from '../../assets/responsive.svg';

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
      <Skills>
        <h3>Minhas Habilidades</h3>
        <div>
          <img src={responsive} />
          <p>Páginas responsivas</p>
        </div>
      </Skills>
    </>
  );
};

export default Home;
