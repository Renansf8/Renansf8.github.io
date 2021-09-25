import React, { useContext } from 'react';
import Switch from 'react-switch';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavBar, ContactContainer, NavContainer, SwitchContainer } from './styles';
import Tooltip from '../../components/Tooltip';
import { TooltipTarget } from '../../components/Tooltip/styles';
import { CenterContainer } from '../../components/Tooltip/styles';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

interface NavbarProps {
  swtichTheme(): void;
}

const Navbar: React.FC<NavbarProps> = ({ swtichTheme }) => {
  const { colors, title } = useContext(ThemeContext);

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
      <SwitchContainer>
        <Switch
          onChange={swtichTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.1, colors.primary)}
          onColor={colors.text}
          offHandleColor="#505152"
          onHandleColor={colors.primary}
        />
      </SwitchContainer>
    </NavBar>
  );
};

export default Navbar;
