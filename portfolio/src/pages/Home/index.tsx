import React from 'react';
import Navbar from '../../components/Navbar';
import { BiRightArrowAlt } from 'react-icons/bi';
import { RiCodeSSlashFill } from 'react-icons/ri';

import { Header, Skills, SkillsList, CardFront, CardBack, CardContainer } from './styles';
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
        <h2>Minhas Habilidades</h2>
        <SkillsList>
          <CardContainer>
            <CardFront>
              <RiCodeSSlashFill size={64} />
              <p>Desenvolvimento web</p>
            </CardFront>
            <CardBack>
              <p>Ás páginas web se adaptam aos diferentes tamanhos de tela</p>
            </CardBack>
          </CardContainer>
          <CardContainer>
            <CardFront>
              <img src={responsive} />
              <p>Clean code</p>
            </CardFront>
            <CardBack>
              <p>Ás páginas web se adaptam aos diferentes tamanhos de tela</p>
            </CardBack>
          </CardContainer>
          <CardContainer>
            <CardFront>
              <img src={responsive} />
              <p>Design Responsivo</p>
            </CardFront>
            <CardBack>
              <p>Ás páginas web se adaptam aos diferentes tamanhos de tela</p>
            </CardBack>
          </CardContainer>
        </SkillsList>
      </Skills>
    </>
  );
};

export default Home;
