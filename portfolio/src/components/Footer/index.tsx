import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Footer } from './styles';

const FooterComponent: React.FC = () => {
  return (
    <Footer>
      <a href="https://www.linkedin.com/in/renanferreira8/">
        <FaLinkedin size={32} />
      </a>
      <a href="https://github.com/Renansf8">
        <FaGithub size={32} />
      </a>
    </Footer>
  );
};

export default FooterComponent;
