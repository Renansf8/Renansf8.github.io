import React from 'react';
import Footer from '../../components/Footer';
import Tooltip from '../../components/Tooltip';
import { BiRightArrowAlt } from 'react-icons/bi';
import { RiCodeSSlashFill, RiComputerLine } from 'react-icons/ri';
import { GiDiamondHard } from 'react-icons/gi';
import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiJest,
  SiGit,
  SiTypescript,
} from 'react-icons/si';
import {
  HTML,
  CSS,
  JAVASCRIPT,
  REACT,
  REDUX,
  JEST,
  RTL,
  GIT,
  TYPESCRIPT,
} from '../../helpers/Tecs';

import {
  Header,
  Skills,
  SkillsList,
  CardFront,
  CardBack,
  CardContainer,
  Tecs,
} from './styles';
// import responsive from '../../assets/responsive.svg';
import { TooltipTarget } from '../../components/Tooltip/styles';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <p>Olá, eu sou </p>
        <h1>Renan Santiago Ferreira</h1>
        <h3>Desenvolvedor front end</h3>
        <a
          data-testid="project-link"
          href="https://github.com/Renansf8"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            Meu Github <BiRightArrowAlt size={22} />
          </button>
        </a>
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
              {/* <img src={responsive} /> */}
              <RiComputerLine size={64} />
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
          <Tooltip position="" language="HTML: " text={HTML}>
            <TooltipTarget>
              <ImHtmlFive size={48} color="#e65200" />
            </TooltipTarget>
          </Tooltip>
          <Tooltip position="" language="CSS: " text={CSS}>
            <TooltipTarget>
              <ImCss3 size={48} color="blue" />
            </TooltipTarget>
          </Tooltip>
          <Tooltip position="" language="Javascript: " text={JAVASCRIPT}>
            <TooltipTarget>
              <SiJavascript size={48} color="#dbce00" />
            </TooltipTarget>
          </Tooltip>
          <Tooltip position="" language="Typescript: " text={TYPESCRIPT}>
            <TooltipTarget>
              <SiTypescript size={48} color="#007ddb" />
            </TooltipTarget>
          </Tooltip>
          <Tooltip position="" language="React: " text={REACT}>
            <TooltipTarget>
              <SiReact size={48} color="cyan" />
            </TooltipTarget>
          </Tooltip>
          <Tooltip position="" language="Redux: " text={REDUX}>
            <TooltipTarget>
              <SiRedux size={48} color="purple" />
            </TooltipTarget>
          </Tooltip>
          <Tooltip position="" language="Jest: " text={JEST}>
            <TooltipTarget>
              <SiJest size={48} color="brown" />
            </TooltipTarget>
          </Tooltip>
          <Tooltip position="" language="RTL: " text={RTL}>
            <TooltipTarget>
              <img src="https://camo.githubusercontent.com/aa85cea585880ae694b4fe8dde116d092b8907d6351c71fcd76f00f7586fad72/68747470733a2f2f74657374696e672d6c6962726172792e636f6d2f696d672f6f63746f7075732d313238783132382e706e67" />
            </TooltipTarget>
          </Tooltip>
          <Tooltip position="" language="Git: " text={GIT}>
            <TooltipTarget>
              <SiGit size={48} color="orange" />
            </TooltipTarget>
          </Tooltip>
        </div>
      </Tecs>
      <Footer />
    </>
  );
};

export default Home;
