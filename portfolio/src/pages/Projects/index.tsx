import React from 'react';
import NavBar from '../../components/Navbar';
import { projectList } from '../../helpers/Project';

import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import { SiJavascript, SiReact, SiRedux, SiTypescript } from 'react-icons/si';

import { Header, ProjectsList, ProjectCard, Tecs } from './styles';

const Projects: React.FC = () => {
  const { toDo, trybeWallet, gitCollection } = projectList;

  return (
    <>
      <NavBar />
      <Header>
        <h1>Meus Projetos</h1>
      </Header>
      <ProjectsList>
        <ProjectCard>
          <h3>{toDo.title}</h3>
          <p>{toDo.description}</p>
          <Tecs>
            <p>Tecnologias utilizadas:</p>
            <div>
              <ImHtmlFive color="red" size={24} />
              <ImCss3 color="blue" size={24} />
              <SiJavascript color="yellow" size={24} />
            </div>
          </Tecs>
          <img src={toDo.thumb} />
          <div>
            <a
              href="https://github.com/Renansf8/todo-list"
              target="_blank"
              rel="noreferrer"
            >
              <button>Ir para o repositório</button>
            </a>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h3>{trybeWallet.title}</h3>
          <p>{trybeWallet.description}</p>
          <Tecs>
            <p>Tecnologias utilizadas:</p>
            <div>
              <ImHtmlFive color="red" size={24} />
              <ImCss3 color="blue" size={24} />
              <SiJavascript color="yellow" size={24} />
              <SiReact color="cyan" size={24} />
              <SiRedux color="purple" size={24} />
              <img src="https://camo.githubusercontent.com/aa85cea585880ae694b4fe8dde116d092b8907d6351c71fcd76f00f7586fad72/68747470733a2f2f74657374696e672d6c6962726172792e636f6d2f696d672f6f63746f7075732d313238783132382e706e67" />
            </div>
          </Tecs>
          <img src={trybeWallet.thumb} />
          <div>
            <a
              href="https://github.com/Renansf8/Trybewallet"
              target="_blank"
              rel="noreferrer"
            >
              <button>Ir para o repositório</button>
            </a>
            <a
              href="https://renansf8.github.io/trybewallet/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Ir para o site</button>
            </a>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h3>{gitCollection.title}</h3>
          <p>{gitCollection.description}</p>
          <Tecs>
            <p>Tecnologias utilizadas:</p>
            <div>
              <ImHtmlFive color="red" size={24} />
              <ImCss3 color="blue" size={24} />
              <SiTypescript color="blue" size={24} />
              <SiReact color="cyan" size={24} />
            </div>
          </Tecs>
          <img src={gitCollection.thumb} />
          <div>
            <a
              href="https://github.com/Renansf8/gitcollection"
              target="_blank"
              rel="noreferrer"
            >
              <button>Ir para o repositório</button>
            </a>
            <a
              href="https://renansf8.github.io/gitcollection"
              target="_blank"
              rel="noreferrer"
            >
              <button>Ir para o site</button>
            </a>
          </div>
        </ProjectCard>
      </ProjectsList>
    </>
  );
};

export default Projects;
