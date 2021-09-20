import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavBar, ContactContainer, NavContainer } from './styles';
import Tooltip from '../../components/Tooltip';
import { TooltipTarget } from '../../components/Tooltip/styles';
import { CenterContainer } from '../../components/Tooltip/styles';

const Navbar: React.FC = () => {
  return (
    <NavBar>
      <NavContainer>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
      </NavContainer>
      <ContactContainer>
        <p>Contato |</p>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/renanferreira8/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={26} />
        </a>
        <a
          className="github"
          href="https://github.com/Renansf8"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={26} />
        </a>

        <Tooltip position="bottom" text="91992611041">
          <TooltipTarget>
            <a className="whatsapp">
              <FaWhatsapp size={26} />
            </a>
          </TooltipTarget>
          <CenterContainer position="bottom"></CenterContainer>
        </Tooltip>
      </ContactContainer>
    </NavBar>
  );
};

export default Navbar;
