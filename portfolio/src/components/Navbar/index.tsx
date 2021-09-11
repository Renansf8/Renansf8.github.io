import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { NavBar, ContactContainer, NavContainer } from './styles';

const Navbar: React.FC = () => {
  return (
    <NavBar>
      <NavContainer>
        <a href="/">Início</a>
        <a>Sobre</a>
        <Link to="/projetos">Projetos</Link>
      </NavContainer>
      <ContactContainer>
        <p>Contato |</p>
        <a className="linkedin" href="https://www.linkedin.com/in/renanferreira8/">
          <FaLinkedin size={26} />
        </a>
        <a className="github" href="https://github.com/Renansf8">
          <FaGithub size={26} />
        </a>
        <a>
          <MdEmail size={26} />
        </a>
      </ContactContainer>
    </NavBar>
  );
};

export default Navbar;
