import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  margin-left: 420px;
  padding: 8px;
`;

export const NavContainer = styled.div`
  a {
    font-size: 22px;
    margin-left: 40px;
    transition: all 0.2s;
  }

  a:hover {
    color: #008b8b;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  margin-left: 260px;

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
