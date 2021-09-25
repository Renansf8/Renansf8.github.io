import styled from 'styled-components';

export const NavBar = styled.nav`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: space-between;
  padding: 8px;
  padding-left: 120px;
  padding-right: 40px;

  @media screen and (max-width: 1000px) and (min-width: 500px) {
    display: flex;
    max-width: 900px;
    margin: 0 auto;
    padding-left: 0;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }
`;

export const NavContainer = styled.div`
  a {
    font-size: 20px;
    margin-left: 60px;
    transition: all 0.2s;
  }

  a:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media screen and (max-width: 1100px) and (min-width: 500px) {
    a {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 500px) {
    a {
      font-size: 16px;
    }
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

  @media screen and (max-width: 1100px) and (min-width: 500px) {
    margin-left: 60px;

    p {
      font-size: 18px;
      width: 80px;
    }

    svg {
      width: 18px;
    }
  }

  @media screen and (max-width: 500px) {
    display: flex;
    margin-left: 60px;
    margin-top: 16px;

    p {
      font-size: 14px;
    }

    svg {
      width: 14px;
      margin-top: -4px;
    }
  }
`;

export const SwitchContainer = styled.div`
  @media screen and (max-width: 1100px) and (min-width: 500px) {
    margin-left: 0;
  }

  @media screen and (max-width: 500px) {
    margin-left: 280px;
    margin-top: -34px;
  }
`;
