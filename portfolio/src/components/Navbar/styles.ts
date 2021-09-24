import styled from 'styled-components';

export const NavBar = styled.nav`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: space-between;
  padding: 8px;
  padding-left: 120px;
  padding-right: 40px;
`;

export const NavContainer = styled.div`
  a {
    font-size: 22px;
    margin-left: 60px;
    transition: all 0.2s;
  }

  a:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  margin-left: 320px;

  p {
    font-size: 22px;
    margin-right: 8px;
  }

  a {
    margin-left: 12px;
    transition: all 0.3s;
  }

  & + a {
    color: red;
  }

  .linkedin:hover {
    color: #0e76a8;
  }

  .github:hover {
    color: gray;
  }

  .whatsapp {
    margin-top: -5px;
    margin-left: 4px;
  }

  .whatsapp:hover {
    color: #00d600;
  }
`;
