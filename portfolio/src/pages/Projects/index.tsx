import React from 'react';
import NavBar from '../../components/Navbar';
import todoImg from '../../assets/todo-list.png';

import { Header, ProjectsList, ProjectCard } from './styles';

const Projects: React.FC = () => {
  return (
    <>
      <NavBar />
      <Header>
        <h1>Meus Projetos</h1>
      </Header>
      <ProjectsList>
        <ProjectCard>
          <h3>Todo-list</h3>
          <p>
            Lista de tarefas com varias funções para uma completa organização das tarefas
            que irão ser feitas ao longo dos dias. Feita com HTML, CSS e Javascript, bem
            como o uso da web storage para armazenar os dados.
          </p>
          <img src={todoImg} />
          <button>Ver detalhes do projeto</button>
        </ProjectCard>
        <ProjectCard>
          <h3>Todo-list</h3>
          <p>
            Lista de tarefas com varias funções para uma completa organização das tarefas
            que irão ser feitas ao longo dos dias. Feita com HTML, CSS e Javascript, bem
            como o uso da web storage para armazenar os dados.
          </p>
          <img src={todoImg} />
          <button>Ver detalhes do projeto</button>
        </ProjectCard>
        <ProjectCard>
          <h3>Todo-list</h3>
          <p>
            Lista de tarefas com varias funções para uma completa organização das tarefas
            que irão ser feitas ao longo dos dias. Feita com HTML, CSS e Javascript, bem
            como o uso da web storage para armazenar os dados.
          </p>
          <img src={todoImg} />
          <button>Ver detalhes do projeto</button>
        </ProjectCard>
      </ProjectsList>
    </>
  );
};

export default Projects;
