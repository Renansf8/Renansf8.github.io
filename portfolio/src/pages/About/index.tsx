import React from 'react';
import { AboutSection } from './styles';
import { BiRightArrowAlt } from 'react-icons/bi';

const About: React.FC = () => {
  return (
    <>
      <AboutSection>
        <article>
          <h1>Renan Santiago Ferreira</h1>
          <p>
            De Belém do Pará, tenho 26 anos, apaixoando por tecnologia. Formado e pós
            graduado em Engenharia Civil.
          </p>
          <p>
            Estou em transição de carreira para a área de tecnologia, atualmente estudando
            desenvolvimento web fullstack na Trybe. Estou buscando aprimorar meus
            conhecimentos no desenvolvimento de software.
          </p>
          <p></p>
          <p>
            Já conclui o módulo de front-end e estou no ínicio do módulo de back-end.
            Busco por oportunidades para iniciar minha carreira como desenvolvedor e
            aprimorar ainda mais meus conhecimentos nas tecnologias que já conheço, assim
            como aprender novas.
          </p>
          <a
            href="https://www.linkedin.com/in/renanferreira8/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              Meu Linkedin <BiRightArrowAlt size={22} />
            </button>
          </a>
        </article>
      </AboutSection>
    </>
  );
};

export default About;
