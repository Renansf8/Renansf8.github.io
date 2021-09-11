import React from 'react';
import Navbar from '../../components/Navbar';
import { BiRightArrowAlt } from 'react-icons/bi';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { GiDiamondHard } from 'react-icons/gi';
import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import { SiJavascript, SiReact, SiRedux, SiJest } from 'react-icons/si';

import {
  Header,
  Skills,
  SkillsList,
  CardFront,
  CardBack,
  CardContainer,
  Tecs,
} from './styles';
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
              <p>Construção de interfaces voltadas para a web</p>
            </CardBack>
          </CardContainer>

          <CardContainer>
            <CardFront>
              <GiDiamondHard size={64} />
              <p>Clean code</p>
            </CardFront>
            <CardBack>
              <p>Código limpo para facilitar a leitura e manutenção</p>
            </CardBack>
          </CardContainer>

          <CardContainer>
            <CardFront>
              <img src={responsive} />
              <p>Design Responsivo</p>
            </CardFront>
            <CardBack>
              <p>As páginas web se adaptam aos diferentes tamanhos de tela</p>
            </CardBack>
          </CardContainer>
        </SkillsList>
      </Skills>
      <Tecs>
        <h2>Tecnologias</h2>
        <div>
          <ImHtmlFive size={48} color="red" />
          <ImCss3 size={48} color="blue" />
          <SiJavascript size={48} color="yellow" />
          <SiReact size={48} color="cyan" />
          <SiRedux size={48} color="purple" />
          <SiJest size={48} color="brown" />
          <img src="https://camo.githubusercontent.com/aa85cea585880ae694b4fe8dde116d092b8907d6351c71fcd76f00f7586fad72/68747470733a2f2f74657374696e672d6c6962726172792e636f6d2f696d672f6f63746f7075732d313238783132382e706e67" />
        </div>
      </Tecs>
    </>
  );
};

export default Home;
